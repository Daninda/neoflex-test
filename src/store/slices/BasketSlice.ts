import { TBasketItem } from '../../types';
import { createAppSlice, getIndexFromId } from './helpers';

type TBasketState = {
  list: TBasketItem[];
  isLoading: boolean;
};

const initialState: TBasketState = {
  list: [],
  isLoading: false,
};

const basketSlice = createAppSlice({
  name: 'basket',
  initialState,
  reducers: create => ({
    fetchBasket: create.reducer(state => {
      const res = localStorage.getItem('basket');
      res ? (state.list = JSON.parse(res)) : [];
    }),

    addOneToBasket: create.reducer<TBasketItem>((state, action) => {
      const itemIndex = getIndexFromId(state.list, action.payload.id);

      if (itemIndex !== null) {
        state.list[itemIndex].count += 1;
      } else {
        state.list.push(action.payload);
      }
    }),

    removeOneFromBasket: create.reducer<number>((state, action) => {
      const itemIndex = getIndexFromId(state.list, action.payload);
      if (itemIndex !== null) {
        if (state.list[itemIndex].count > 1) {
          state.list[itemIndex].count -= 1;
        } else {
          state.list = state.list.filter(item => {
            return item.id !== action.payload;
          });
        }
      }

      localStorage.setItem('basket', JSON.stringify(state.list));
    }),

    removeAllFromBasket: create.reducer<number>((state, action) => {
      state.list = state.list.filter(item => {
        return item.id !== action.payload;
      });

      localStorage.setItem('basket', JSON.stringify(state.list));
    }),
  }),
});

export const { fetchBasket, addOneToBasket, removeAllFromBasket, removeOneFromBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
