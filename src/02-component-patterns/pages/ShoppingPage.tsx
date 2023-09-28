import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css'

const product = products[0];

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div>
                <ProductCard
                    className='bg-dark text-white'
                    product={product}
                    inititalValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
                            <>
                                <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                                <ProductTitle />
                                <ProductButtons className='custom-buttons' />

                                <button onClick={reset}>Reset</button>
                                <button onClick={() => increaseBy(-2)}> -2 </button>
                                {
                                    (!isMaxCountReached && <button onClick={() => increaseBy(+2)}> +2 </button>)
                                }
                                <span>{count} - {maxCount}</span>
                            </>
                        )
                    }
                </ProductCard>
            </div>
        </div>
    )
}
