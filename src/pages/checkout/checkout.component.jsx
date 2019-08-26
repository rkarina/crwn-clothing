import React from 'react';

import { connect } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                Product
            </div>
            <div className='header-block'>
                Description
            </div>
            <div className='header-block'>
                Quantity
            </div>
            <div className='header-block'>
                Price
            </div>
        </div>
        {

        }
        <div className='total'>
            <span>Total: </span><span>${cartTotal}</span>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    cartTotal: selectCartTotal(state)
});

export default connect(mapStateToProps, null)(CheckoutPage);