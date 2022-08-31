import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  page: number;
}

export const initialState: IState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state: IState, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: {},
});

export const pageReducer = pageSlice.actions;
export default pageSlice.reducer;
