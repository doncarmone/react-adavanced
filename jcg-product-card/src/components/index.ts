import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButtons } from "./ProductBottons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from "./ProductBottons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";


export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})


export default ProductCard

