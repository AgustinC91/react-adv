import styles from "../styles/styles.module.css"

import { useProduct } from "../hooks/useProduct";
import { createContext} from "react";
import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";






export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;




interface ProductButtonsProps {
    increaseBy: (value: number) => void,
    counter: number
}


export const ProductCard = ({ product, children }: ProductCardProps) => {


    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>
                {children}
                {/* 
            <ProductImage img={product.img}/>
            <ProductTitle title={product.title}/>
            <ProductButtons increaseBy={increaseBy} counter={counter}/> */}
            </div>
        </Provider>
    )
}

