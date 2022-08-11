import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localStoreService } from "../../utils";

type IState = {
  userData: any;
};

export const initialState: IState = {
  userData: localStoreService.get("userData", "[]"),
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState: initialState,
  reducers: {
    get: (state: IState, action: PayloadAction<any>) => {
      state.userData = action.payload;
    },
    set: (state: IState, action: PayloadAction<any>) => {
      state.userData = action.payload;
    },
    remove: (state: IState, action: PayloadAction<any>) => {
      state.userData = action.payload;
    },
  },
});

export const userReducer = userDataSlice.actions;
export default userDataSlice.reducer;
