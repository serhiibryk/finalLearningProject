import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localStoreService } from "../../utils";

interface UserList {
  data: User[];
}

interface User {
  confirm: string;
  email: string;
  nickname: string;
  password: string;
}

export const initialState: UserList = {
  data: localStoreService.get("userData", "[]"),
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState: initialState,
  reducers: {
    set: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    // remove: (state: any, action: PayloadAction<any>) => {
    //   state.userdata = action.payload;
    // },
  },
});

export const userDataReducer = userDataSlice.actions;
export default userDataSlice.reducer;
