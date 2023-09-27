import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {


    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product} className='bg-dark text-white' 
                style={{
                    backgroundColor: '#70D1F8'
                }}>
                    <ProductCard.Image  className="custom-image"  style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
                    <ProductCard.Title title={'Cafe de Oxaca'} style={{
                        fontWeight: 'bold',
                    }} />
                    <ProductCard.Buttons  className='custom-buttons' style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}/>
                </ProductCard>

                <ProductCard
                    product={product}
                >
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}  />
                    <ProductTitle title={'Cafe de Veracruz'} />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
