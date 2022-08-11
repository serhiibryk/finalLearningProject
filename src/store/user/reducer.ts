import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localStoreService } from "../../utils";

type IState = {
  user: { token: string };
};

export const initialState: IState = {
  user: localStoreService.get("user"),
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state: IState, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    removeUser: (state: IState, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const userReducer = userSlice.actions;
export default userSlice.reducer;
