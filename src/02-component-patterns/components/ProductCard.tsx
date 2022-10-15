import styles from "../styles/styles.module.css"
import { createContext, ReactElement} from "react";
import { useProduct } from "../hooks/useProduct";
import {  onChangeArgs, Product, ProductContextProps } from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args:onChangeArgs ) => void;
    value?:number;
}


interface ProductButtonsProps {
    increaseBy: (value: number) => void,
    counter: number
}


export const ProductCard = ({ product, children,className, style, onChange, value}: Props) => {


    const { counter, increaseBy } = useProduct({onChange, product, value});



    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div 
            className={`${styles.productCard} ${className}`}
            style={style}
            >
                
                {children}
            </div>
        </Provider>
    )
}

