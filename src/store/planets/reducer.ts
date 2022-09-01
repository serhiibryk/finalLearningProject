import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPlanets } from './actions';

export const initialState: IStatePlanets = {
  planets: [],
  error: '',
  isLoading: false,
  count: 0,
};

export const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setPlanets: (state: IStatePlanets, action: PayloadAction<Planets[]>) => {
      state.planets = action.payload;
    },
  },
  extraReducers: {
    [getPlanets.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getPlanets.fulfilled.type]: (state, action: PayloadAction<GetPlanetsAction>) => {
      state.planets = action.payload.planets;
      state.count = action.payload.count;
      state.isLoading = false;
    },
    [getPlanets.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const planetsReducer = planetsSlice.actions;
export default planetsSlice.reducer;
