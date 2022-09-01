import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { localStoreService } from '../../utils';

export const initialState: IStateUser = {
  token: localStoreService.get('user'),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: IStateUser, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const userReducer = userSlice.actions;
export default userSlice.reducer;
