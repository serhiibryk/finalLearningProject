import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPeoples } from "./actions";

type IState = {
  isLoading: boolean;
  error: string;
  people: People[];
  count: number;
};

export const initialState: IState = {
  isLoading: false,
  error: "",
  people: [],
  count: 0,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setPeople: (state: any, action: PayloadAction<any>) => {
      state.people = action.payload;
    },
  },
  extraReducers: {
    [getPeoples.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getPeoples.fulfilled.type]: (
      state,
      action: PayloadAction<GetPeopleAction>
    ) => {
      state.people = action.payload.people;
      state.count = action.payload.count;
      state.isLoading = false;
    },
    [getPeoples.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const peopleReducer = peopleSlice.actions;
export default peopleSlice.reducer;
