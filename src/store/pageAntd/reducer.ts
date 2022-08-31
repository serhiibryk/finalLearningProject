import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IState = {
  page: number;
};

export const initialState: IState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState: initialState,
  reducers: {
    setPage: (state: any, action: PayloadAction<any>) => {
      state.page = action.payload;
    },
  },
  extraReducers: {},
});

export const pageReducer = pageSlice.actions;
export default pageSlice.reducer;
