import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localStoreService } from "../../utils";

type IState = {
  token: string;
};

export const initialState: IState = { token: localStoreService.get("user") };

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state: any, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    removeUser: (state: any, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const userReducer = userSlice.actions;
export default userSlice.reducer;
