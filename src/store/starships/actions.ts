import { createAsyncThunk } from '@reduxjs/toolkit';
import { starshipsService } from '../../services/starships';

export const getStarships = createAsyncThunk('starships/getStarships', async (page: number, thunkApi) => {
  try {
    const { results, count } = await starshipsService.getStarships(page);
    return { starships: results, count };
  } catch (e: any) {
    return thunkApi.rejectWithValue(e.code);
  }
});
