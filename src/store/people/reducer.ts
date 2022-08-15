import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IState = {
  people: People[];
};

export const initialState: IState = {
  people: [],
};

export const peopleSlice = createSlice({
  name: "people",
  initialState: initialState,
  reducers: {
    setPeople: (state: any, action: PayloadAction<any>) => {
      state.people = action.payload;
    },
  },
  extraReducers: {},
});

export const peopleReducer = peopleSlice.actions;
export default peopleSlice.reducer;
