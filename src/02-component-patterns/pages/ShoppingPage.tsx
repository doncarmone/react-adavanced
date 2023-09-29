import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div>
                <ProductCard
                    product={product}
                    inititalValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons/>
                            </>
                        )
                    }
                </ProductCard>
            </div>
        </div>
    )
}
