import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // HIGHER ORDER COMPONENT
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';


import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser, selectCartHidden } from '../../redux/user/user.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';


const Header = ({ currentUser, hidden, cartItems }) => (
    <div className='header'>
        <Link className='logo-container' to="/" >
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
                <CartDropdown cartItems={cartItems} />
        }
    </div>
);

// state - ROOT REDUCER
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(Header); 