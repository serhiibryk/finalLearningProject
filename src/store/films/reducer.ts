import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFilms } from './actions';

export const initialState: IStateFilms = {
  films: [],
  isLoading: false,
  error: '',
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms: (state: IStateFilms, action: PayloadAction<Films[]>) => {
      state.films = action.payload;
    },
  },
  extraReducers: {
    [getFilms.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getFilms.fulfilled.type]: (state, action: PayloadAction<Films[]>) => {
      state.films = action.payload;
      state.isLoading = false;
    },
    [getFilms.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const filmsReducer = filmsSlice.actions;
export default filmsSlice.reducer;
