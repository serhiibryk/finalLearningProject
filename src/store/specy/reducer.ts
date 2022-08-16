import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IState = {
  specy: Species[];
};

export const initialState: IState = {
  specy: [],
};

export const specySlice = createSlice({
  name: "specy",
  initialState: initialState,
  reducers: {
    setSpecies: (state: any, action: PayloadAction<any>) => {
      state.specy = action.payload;
    },
  },
  extraReducers: {},
});

export const specyReducer = specySlice.actions;
export default specySlice.reducer;
