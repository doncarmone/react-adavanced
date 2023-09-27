import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css'

export const ShoppingPage = () => {
    const { shoppingCart, onProductCountChange } = useShoppingCart()
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onChange={(evento) => onProductCountChange(evento)}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle />
                            <ProductButtons />
                        </ProductCard>
                    ))
                }
            </div>

            <div className='shopping-cart'>
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className='bg-dark text-white'
                            style={{ width: '100px' }}
                            onChange={(evento) => onProductCountChange(evento)}
                            value={product.count}
                        >
                            <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />

                            <ProductButtons className='custom-buttons' style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }} />
                        </ProductCard>
                    ))
                }
            </div>

            {/* <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div> */}
        </div >
    )
}
