import { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css"

interface Props {
    className? : string;
    style?: React.CSSProperties
}

export const ProductButtons = ({className, style}:Props) => {
    
    //TODO: maxCount

    const {increaseBy,counter, maxCount} = useContext(ProductContext)
    
    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount
      ,
      [counter,maxCount],
    )
    
    //TODO: isMaxReached = useCallBack,dependecias[counter, maxCounter]
    //TRUE si el  count ===maxCounter
    //false si no lo es 

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button
                onClick={() => increaseBy(-1)}
                className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
                onClick={() => increaseBy(+1)}
            >+</button>
        </div>
    )
}
