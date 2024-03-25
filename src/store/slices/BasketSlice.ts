import DataService from '../../dataService';
import { TProduct } from '../../types';
import { createAppSlice } from './helpers';

type TBasketState = {
  countList: { id: number; count: number }[];
  list: TProduct[];
};

const initialState: TBasketState = {
  countList: [],
  list: [],
};

const basketSlice = createAppSlice({
  name: 'basket',
  initialState,
  reducers: create => ({
    fetchBasketCountList: create.reducer(state => {
      state.countList = DataService.getBasket();
    }),

    fetchBasketList: create.reducer(state => {
      state.list = DataService.getProductsByIds(state.countList.map(value => value.id));
    }),

    addOneToBasket: create.reducer<number>((state, action) => {
      if (state.countList.some(value => value.id === action.payload)) {
        state.countList = state.countList.map(value =>
          value.id === action.payload ? { id: action.payload, count: value.count + 1 } : value
        );
      } else {
        state.countList.push({ id: action.payload, count: 1 });
      }

      DataService.setBasket(state.countList);
    }),

    removeOneFromBasket: create.reducer<number>((state, action) => {
      if (state.countList.some(value => value.id === action.payload)) {
        state.countList = state.countList.map(value =>
          value.id === action.payload ? { id: action.payload, count: value.count - 1 } : value
        );
      }
      state.countList = state.countList.filter(value => {
        return !(value.count < 1);
      });

      DataService.setBasket(state.countList);
    }),

    removeAllFromBasket: create.reducer<number>((state, action) => {
      state.countList = state.countList.filter(value => {
        return value.id !== action.payload;
      });

      DataService.setBasket(state.countList);
    }),
  }),
});

export const {
  addOneToBasket,
  fetchBasketCountList,
  fetchBasketList,
  removeAllFromBasket,
  removeOneFromBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
