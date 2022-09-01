import { createAsyncThunk } from '@reduxjs/toolkit';
import { filmsService } from '../../services/films';

export const getFilms = createAsyncThunk('films/getFilms', async (_, thunkApi) => {
  try {
    const { results } = await filmsService.getFilms();
    return results;
  } catch (e) {
    let message = 'Unknown Error';
    if (e instanceof Error) message = e.message;
    return thunkApi.rejectWithValue(message);
  }
});
