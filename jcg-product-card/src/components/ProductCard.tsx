import { useProduct } from "../hooks/useProduct";
import React, { createContext } from "react";
import { InititalValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    inititalValues?: InititalValues
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value, inititalValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
        useProduct({ onChange, product, value, inititalValues });

    return (
        <Provider value={{ counter, increaseBy, product, maxCount }}>
            <div
                style={style}
                className={`${styles.productCard} ${className} `}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: inititalValues?.maxCount,
                    product,
                    increaseBy,
                    reset
                })}
            </div>
        </Provider>
    )
}
