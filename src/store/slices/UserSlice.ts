import { createAppSlice } from './helpers';

type TUserState = {
  basket: { id: number; count: number }[];
  favorites: number[];
};

const initialState: TUserState = {
  basket: [],
  favorites: [],
};

const userSlice = createAppSlice({
  name: 'user',
  initialState,
  reducers: create => ({
    fetchUser: create.reducer(state => {
      const basket = localStorage.getItem('basket');
      basket ? (state.basket = JSON.parse(basket)) : [];

      const favorites = localStorage.getItem('favorites');
      favorites ? (state.favorites = JSON.parse(favorites)) : [];
    }),

    addOneToBasket: create.reducer<number>((state, action) => {
      if (state.basket.some(value => value.id === action.payload)) {
        state.basket = state.basket.map(value =>
          value.id === action.payload ? { id: action.payload, count: value.count + 1 } : value
        );
      } else {
        state.basket.push({ id: action.payload, count: 1 });
      }

      localStorage.setItem('basket', JSON.stringify(state.basket));
    }),

    removeOneFromBasket: create.reducer<number>((state, action) => {
      if (state.basket.some(value => value.id === action.payload)) {
        state.basket = state.basket.map(value =>
          value.id === action.payload ? { id: action.payload, count: value.count - 1 } : value
        );
      }
      state.basket = state.basket.filter(value => {
        return !(value.count < 1);
      });

      localStorage.setItem('basket', JSON.stringify(state.basket));
    }),

    removeAllFromBasket: create.reducer<number>((state, action) => {
      state.basket = state.basket.filter(value => {
        return value.id !== action.payload;
      });

      localStorage.setItem('basket', JSON.stringify(state.basket));
    }),

    addToFavorites: create.reducer<number>((state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    }),

    removeFromFavorites: create.reducer<number>((state, action) => {
      state.favorites = state.favorites.filter(value => value !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }),
  }),
});

export const {
  fetchUser,
  addOneToBasket,
  removeAllFromBasket,
  removeOneFromBasket,
  addToFavorites,
  removeFromFavorites,
} = userSlice.actions;

export default userSlice.reducer;
