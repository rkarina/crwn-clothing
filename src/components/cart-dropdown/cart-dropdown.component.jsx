import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';  


import './cart-dropdown.styles.scss';

const Cart = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default Cart;