import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  stateForScroll: Planets[];
}

export const initialState: IState = {
  stateForScroll: [],
};

export const infiniteScrollSlice = createSlice({
  name: 'infiniteSctroll',
  initialState,
  reducers: {
    setForScroll: (state: IState, action: PayloadAction<Planets[]>) => {
      state.stateForScroll = action.payload;
    },
  },
  extraReducers: {},
});

export const infiniteScrollReducer = infiniteScrollSlice.actions;
export default infiniteScrollSlice.reducer;
