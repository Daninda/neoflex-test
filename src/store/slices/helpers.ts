import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';
import { TBasketItem } from '../../types';

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const getIndexFromId = (list: TBasketItem[], id: number): number | null => {
  let itemIndex = null;
  list.forEach((item, index) => {
    if (item.id === id) {
      itemIndex = index;
    }
  });
  return itemIndex;
};
