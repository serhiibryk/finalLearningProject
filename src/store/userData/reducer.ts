import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { localStoreService } from '../../utils';

interface User {
  confirm: string;
  email: string;
  nickname: string;
  password: string;
}

export const initialState: IStateUserData = {
  data: localStoreService.get('userData', '[]'),
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    set: (state: IStateUserData, action: PayloadAction<User[]>) => {
      state.data = action.payload;
    },
  },
});

export const userDataReducer = userDataSlice.actions;
export default userDataSlice.reducer;
