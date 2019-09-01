import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addItemToCart, removeItemFromCart, clearItemFromCart }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (<div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItemToCart(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div onClick={() => clearItemFromCart(cartItem)} className='remove-button'>&#10005;</div>
    </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItem(item)),
    removeItemFromCart: item => dispatch(removeItem(item)),
    clearItemFromCart: item => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem); 