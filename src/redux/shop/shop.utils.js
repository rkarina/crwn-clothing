export const selectShopItemsByCategory = (collections, categoryId) => {
    const existingCartItem = collections.find(
        collection => collection.routeName === categoryId
    );

    if (existingCartItem) {
        console.log("Shop Utils: ", existingCartItem); 
        return collections.filter(collection => collection.routeName === categoryId);
    }

    return collections;
}