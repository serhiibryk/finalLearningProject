import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IStateDarkMode {
  isDarkMode: boolean;
}

export const initialState: IStateDarkMode = {
  isDarkMode: false,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setIsDarkMode: (state: IStateDarkMode, action: PayloadAction<any>) => {
      state.isDarkMode = action.payload;
    },
  },
  extraReducers: {},
});

export const darkModeReducer = darkModeSlice.actions;
export default darkModeSlice.reducer;
