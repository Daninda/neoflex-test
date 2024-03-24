import { configureStore } from '@reduxjs/toolkit';
import BasketSlice from './slices/BasketSlice';
import ProductsSlice from './slices/ProductsSlice';
import UserSlice from './slices/UserSlice';

const store = configureStore({
  reducer: {
    products: ProductsSlice,
    user: UserSlice,
    basket: BasketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
