import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    let totalPrice =0;
    let shippingCarge =0;
    let productQuantity = 0;
    for(const product of cart){
        productQuantity = productQuantity + product.quantity;
        totalPrice = totalPrice+product.price * product.quantity;
        shippingCarge = shippingCarge + product.shipping;
    }
    const tax = (totalPrice * 0.1).toFixed(2);
    const grandTotal = (totalPrice + Number(tax))
    return (
        <div className='cart'>
            <h3 className='order-summary'>Order Summary</h3>
            <div>
                <p className='additional-info'>Selected Items:{productQuantity}</p>
                <p className='additional-info'>Total Price: $ {totalPrice}</p>
                <p className='additional-info'>Total Shipping Charge: $ {shippingCarge}</p>
                <p className='additional-info'>Tax: $ {tax}</p>
                <h4 style={{fontSize: '25px'}}>Grand Total: $ {grandTotal}</h4>
            </div>
        </div>
    );
};

export default Cart;