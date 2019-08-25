import ShopActionTypes from './shop.types';

export const updateCollections = collectionsMap => {
  return {
    type: ShopActionTypes.UDATE_COLLECTIONS,
    payload: collectionsMap
  };
};
