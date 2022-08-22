import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IState = {
  starships: Vehicles[];
};

export const initialState: IState = {
  starships: [],
};

export const starshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {
    setStarships: (state: any, action: PayloadAction<any>) => {
      state.starships = action.payload;
    },
  },
  extraReducers: {},
});

export const starshipsReducer = starshipsSlice.actions;
export default starshipsSlice.reducer;
