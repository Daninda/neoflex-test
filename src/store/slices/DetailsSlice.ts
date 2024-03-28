import DataService from '../../dataService';
import { TProduct } from '../../types';
import { createAppSlice } from './helpers';

type TDetailsState = {
  product?: TProduct;
  isShown: boolean;
};

const initialState: TDetailsState = {
  product: undefined,
  isShown: false,
};

const detailsSlice = createAppSlice({
  name: 'details',
  initialState,
  reducers: create => ({
    fetchDetails: create.reducer<number>((state, action) => {
      state.product = DataService.getProduct(action.payload);
    }),

    setShownDetails: create.reducer<boolean>((state, aciton) => {
      state.isShown = aciton.payload;
    }),
  }),
});

export const { fetchDetails, setShownDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
