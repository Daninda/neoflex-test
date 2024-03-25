import DataService from '../../dataService';
import { TProduct } from '../../types';
import { createAppSlice } from './helpers';

type TDetailsState = {
  product?: TProduct;
};

const initialState: TDetailsState = {
  product: undefined,
};

const detailsSlice = createAppSlice({
  name: 'details',
  initialState,
  reducers: create => ({
    fetchDetails: create.reducer<number>((state, action) => {
      state.product = DataService.getProduct(action.payload);
    }),
  }),
});

export const { fetchDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
