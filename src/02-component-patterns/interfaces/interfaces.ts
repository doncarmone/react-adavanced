import { Props as ProductButtonProps} from '../components/ProductBottons';
import { Props as ProductCardProps, ProductCard } from '../components/ProductCard';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductTitleProps} from '../components/ProductTitle';
import { products } from '../data/products';

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  maxCount?: number
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ( Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonProps) => JSX.Element;
}

export interface onChangeArgs {
  count: number;
  product: Product;
}

export interface ProductInCart extends Product {
  count: number
}


export interface InititalValues {
  count?: number;
  maxCount?: number; 
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  
  increaseBy: (value: number) => void;
  reset: () => void;
}