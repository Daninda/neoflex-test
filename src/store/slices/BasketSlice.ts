import DataService from '../../dataService';
import { TProduct } from '../../types';
import { createAppSlice } from './helpers';

type TBasketState = {
  list: TProduct[];
};

const initialState: TBasketState = {
  list: [],
};

const basketSlice = createAppSlice({
  name: 'basket',
  initialState,
  reducers: create => ({
    fetchBasket: create.reducer(state => {
      const basketIds = DataService.getUserData().basket;
      state.list = DataService.getProductsByIds(basketIds.map(value => value.id));
    }),
  }),
});

export const { fetchBasket } = basketSlice.actions;

export default basketSlice.reducer;
