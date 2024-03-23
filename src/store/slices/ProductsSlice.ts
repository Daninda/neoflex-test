import { TProduct } from '../../types';
import testData from '../testData';
import { createAppSlice } from './helpers';

type TProductsState = {
  list: TProduct[];
  isLoading: boolean;
};

const initialState: TProductsState = {
  list: [],
  isLoading: false,
};

const productsSlice = createAppSlice({
  name: 'products',
  initialState,
  reducers: create => ({
    fetchProducts: create.reducer(state => {
      state.list = testData;
    }),
  }),
});

export const { fetchProducts } = productsSlice.actions;

export default productsSlice.reducer;
