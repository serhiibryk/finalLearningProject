import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: IStatePage = {
  page: 1,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state: IStatePage, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: {},
});

export const pageReducer = pageSlice.actions;
export default pageSlice.reducer;
