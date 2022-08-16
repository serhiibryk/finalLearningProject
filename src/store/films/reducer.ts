import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IState = {
  films: Films[];
};

export const initialState: IState = {
  films: [],
};

export const filmsSlice = createSlice({
  name: "films",
  initialState: initialState,
  reducers: {
    setFilms: (state: any, action: PayloadAction<any>) => {
      state.films = action.payload;
    },
  },
  extraReducers: {},
});

export const filmsReducer = filmsSlice.actions;
export default filmsSlice.reducer;
