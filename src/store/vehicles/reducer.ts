import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IState = {
  vehicles: Vehicles[];
};

export const initialState: IState = {
  vehicles: [],
};

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: initialState,
  reducers: {
    setVehicles: (state: any, action: PayloadAction<any>) => {
      state.vehicles = action.payload;
    },
  },
  extraReducers: {},
});

export const vehiclesReducer = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
