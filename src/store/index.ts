import { configureStore } from '@reduxjs/toolkit';
import BasketSlice from './slices/BasketSlice';
import FavoritesSlice from './slices/FavoritesSlice';
import ProductsSlice from './slices/ProductsSlice';

const store = configureStore({
  reducer: {
    products: ProductsSlice,
    basket: BasketSlice,
    favorites: FavoritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
