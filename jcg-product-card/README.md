# JCG-PRODUCT-CARD

Testing package to test deployment on NPM

### @donCarmone


## Ejemplo

```
import { ProductCart, ProductImage, ProductTitle, ProductButtons} from 'jcg-product-card'
```

```
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
```
