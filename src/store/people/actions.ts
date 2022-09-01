import { createAsyncThunk } from '@reduxjs/toolkit';
import { peopleService } from '../../services/people';

export const getPeoples = createAsyncThunk('people/getPeoples', async (page: number, thunkApi) => {
  try {
    const { results, count } = await peopleService.getPeople(page);
    return { people: results, count };
  } catch (e) {
    let message = 'Unknown Error';
    if (e instanceof Error) message = e.message;
    return thunkApi.rejectWithValue(message);
  }
});
