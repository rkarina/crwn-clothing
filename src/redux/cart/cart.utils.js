export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const itemId = cartItemToRemove ? cartItemToRemove.id : 0;
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemId
    );

    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemId);
    } else {
        return cartItems.map(cartItem =>
            cartItem.id === itemId
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    }
}


export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}