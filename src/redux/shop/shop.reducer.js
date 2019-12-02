import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';

import { selectShopItemsByCategory } from './shop.utils';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.SELECT_ITEMS_BY_CATEORY:
            return {
                ...state,
                collections: selectShopItemsByCategory(state.collections, action.payload)
            }
        default:
            return state;
    }
}

export default shopReducer;