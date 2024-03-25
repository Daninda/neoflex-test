import { configureStore } from '@reduxjs/toolkit';
import BasketSlice from './slices/BasketSlice';
import DetailsSlice from './slices/DetailsSlice';
import FavoritesSlice from './slices/FavoritesSlice';
import ProductsSlice from './slices/ProductsSlice';

const store = configureStore({
  reducer: {
    products: ProductsSlice,
    basket: BasketSlice,
    favorites: FavoritesSlice,
    Details: DetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
