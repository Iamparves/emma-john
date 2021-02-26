import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = (props) => {
    const { img, name, url, seller, price, stock, key } = props.product;
    // console.log(props)
    return (
        <div className="product__card">
            <div className="product__img--box">
                <img src={img} alt="" className="product__img" />
            </div>
            <div className="product__details--box">
                <div className="product__details">
                    <a href={url} className="product__name">{name}</a>
                    <p className="product__seller">by: {seller}</p>
                    <p className="product__price">${price}</p>
                    <p className="product__stock">Only {stock} left in stock</p>
                    <button className="product__btn btn__primary" onClick={() => props.handleAddToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;