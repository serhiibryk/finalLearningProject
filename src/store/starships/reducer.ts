import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getStarships } from './actions';

interface IState {
  starships: Vehicles[];
  error: string;
  isLoading: boolean;
  count: number;
}

export const initialState: IState = {
  starships: [],
  error: '',
  isLoading: false,
  count: 0,
};

export const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    setStarships: (state: any, action: PayloadAction<any>) => {
      state.starships = action.payload;
    },
  },
  extraReducers: {
    [getStarships.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getStarships.fulfilled.type]: (state, action: PayloadAction<GetStarshipsAction>) => {
      state.starships = action.payload.starships;
      state.count = action.payload.count;
      state.isLoading = false;
    },
    [getStarships.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const starshipsReducer = starshipsSlice.actions;
export default starshipsSlice.reducer;
