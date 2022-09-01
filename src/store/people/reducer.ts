import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPeoples } from './actions';

export const initialState: IStatePeople = {
  isLoading: false,
  error: '',
  people: [],
  count: 0,
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeople: (state: IStatePeople, action: PayloadAction<People[]>) => {
      state.people = action.payload;
    },
  },
  extraReducers: {
    [getPeoples.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getPeoples.fulfilled.type]: (state, action: PayloadAction<GetPeopleAction>) => {
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
