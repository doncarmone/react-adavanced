import { useEffect, useRef, useState } from "react"
import { InititalValues, Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void
    value?: number;
    inititalValues?: InititalValues
}

export const useProduct = ({ onChange, product, value = 0, inititalValues }: useProductArgs) => {
    

    const [counter, setCounter] = useState<number>(inititalValues?.count || value);

    const isMounted = useRef(false);


    const increaseBy = (value: number) => {
        let newValue =  Math.max(counter + value, 0)

        if (inititalValues?.maxCount) {
            newValue = Math.min(newValue, inititalValues.maxCount)
        }
        
        setCounter(newValue)

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        
        setCounter(inititalValues?.count || value )
    }

    useEffect(() => {
        if ( !isMounted.current) return;
        setCounter(value);
    }, [value])

    useEffect(() => {
        isMounted.current = true;
    }, [])
    


    return {
        counter,
        isMaxCountReached: !!inititalValues?.count && inititalValues.maxCount === counter,
        maxCount: inititalValues?.maxCount,
        increaseBy,
        reset
    }
}