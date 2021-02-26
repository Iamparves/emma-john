import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop__container">
            <div className="container">
                <div className="shop__inner">
                    <div className="product__container">
                        {
                            products.map(product => <Product product={product} handleAddToCart={handleAddProduct} />)
                        }
                    </div>
                    <div className="cart__container">
                        <Cart cart={cart} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;