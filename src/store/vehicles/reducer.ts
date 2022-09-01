import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getVehicles } from './actions';

export const initialState: IStateVehicles = {
  vehicles: [],
  error: '',
  isLoading: false,
  count: 0,
};

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setVehicles: (state: IStateVehicles, action: PayloadAction<Vehicles[]>) => {
      state.vehicles = action.payload;
    },
  },
  extraReducers: {
    [getVehicles.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getVehicles.fulfilled.type]: (state, action: PayloadAction<GetVehiclesAction>) => {
      state.vehicles = action.payload.vehicles;
      state.count = action.payload.count;
      state.isLoading = false;
    },
    [getVehicles.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const vehiclesReducer = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
