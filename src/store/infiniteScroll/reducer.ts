import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: IStateForScroll = {
  stateForScroll: [],
};

export const infiniteScrollSlice = createSlice({
  name: 'infiniteSctroll',
  initialState,
  reducers: {
    setForScroll: (state: IStateForScroll, action: PayloadAction<Planets[]>) => {
      state.stateForScroll = action.payload;
    },
  },
  extraReducers: {},
});

export const infiniteScrollReducer = infiniteScrollSlice.actions;
export default infiniteScrollSlice.reducer;
