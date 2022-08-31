import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { localStoreService } from '../../utils';

interface IState {
  token: string;
}

export const initialState: IState = {
  token: localStoreService.get('user'),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: IState, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
  },
});

export const userReducer = userSlice.actions;
export default userSlice.reducer;
