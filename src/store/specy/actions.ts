import { createAsyncThunk } from '@reduxjs/toolkit';
import { speciesService } from '../../services/species';

export const getSpecy = createAsyncThunk('specy/getSpecy', async (page: number, thunkApi) => {
  try {
    const { results, count } = await speciesService.getSpecies(page);
    return { specy: results, count };
  } catch (e) {
    let message = 'Unknown Error';
    if (e instanceof Error) message = e.message;
    return thunkApi.rejectWithValue(message);
  }
});
