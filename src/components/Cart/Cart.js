import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = fixNumber(cart.reduce((total, prd) => total + prd.price, 0));
    const totalShipping = fixNumber(cart.reduce((total, prd) => total + prd.shipping, 0));
    const totalBeforeTax = fixNumber(totalPrice + totalShipping);
    const estimatedTax = fixNumber(totalBeforeTax * .5);
    const orderTotal = fixNumber(totalBeforeTax + estimatedTax);

    function fixNumber(number) {
        return Math.floor(number * 100) / 100;
    }

    return (
        <div className="cart">
            <h2 className="cart__title">Order Summary</h2>
            <p className="cart__items">Item Ordered: {cart.length}</p>
            <table className="cart__summary">
                <tbody>
                    <tr>
                        <td>Items</td>
                        <td>${totalPrice}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling</td>
                        <td>${totalShipping}</td>
                    </tr>
                    <tr>
                        <td>Total before TAX</td>
                        <td>${totalBeforeTax}</td>
                    </tr>
                    <tr>
                        <td>Estimated TAX</td>
                        <td>${estimatedTax}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Order Total</td>
                        <td>${orderTotal}</td>
                    </tr>
                </tfoot>
            </table>
            <button className="cart__btn btn__primary">Review your order</button>
        </div>
    );
};

export default Cart;