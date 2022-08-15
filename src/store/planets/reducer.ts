import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IState = {
  planets: Planets[];
};

export const initialState: IState = {
  planets: [],
};

export const planetsSlice = createSlice({
  name: "planets",
  initialState: initialState,
  reducers: {
    setPlanets: (state: any, action: PayloadAction<any>) => {
      state.planets = action.payload;
    },
  },
  extraReducers: {},
});

export const planetsReducer = planetsSlice.actions;
export default planetsSlice.reducer;
