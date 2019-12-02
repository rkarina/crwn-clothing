import ShopActionTypes from './shop.types.js';

export const selectShopItemsByCategory = (item) => ({
    type: ShopActionTypes.SELECT_ITEMS_BY_CATEORY, 
    payload: item
});
