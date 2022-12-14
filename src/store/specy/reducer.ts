import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSpecy } from './actions';

export const initialState: IStateSpecy = {
  specy: [],
  error: '',
  isLoading: false,
  count: 0,
};

export const specySlice = createSlice({
  name: 'specy',
  initialState,
  reducers: {
    setSpecies: (state: IStateSpecy, action: PayloadAction<Species[]>) => {
      state.specy = action.payload;
    },
  },
  extraReducers: {
    [getSpecy.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getSpecy.fulfilled.type]: (state, action: PayloadAction<GetSpecyAction>) => {
      state.specy = action.payload.specy;
      state.count = action.payload.count;
      state.isLoading = false;
    },
    [getSpecy.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const specyReducer = specySlice.actions;
export default specySlice.reducer;
