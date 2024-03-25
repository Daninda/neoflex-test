import DataService from '../../dataService';
import { createAppSlice } from './helpers';

type TFavoritesState = {
  list: number[];
};

const initialState: TFavoritesState = {
  list: [],
};

const favoritesSlice = createAppSlice({
  name: 'favorites',
  initialState,
  reducers: create => ({
    fetchFavorites: create.reducer(state => {
      state.list = DataService.getFavorites();
    }),

    addToFavorites: create.reducer<number>((state, action) => {
      if (!state.list.includes(action.payload)) {
        state.list.push(action.payload);
        DataService.setFavorites(state.list);
      }
    }),

    removeFromFavorites: create.reducer<number>((state, action) => {
      state.list = state.list.filter(value => value !== action.payload);
      DataService.setFavorites(state.list);
    }),
  }),
});

export const { addToFavorites, fetchFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
