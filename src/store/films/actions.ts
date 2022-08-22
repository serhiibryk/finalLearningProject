import { createAsyncThunk } from "@reduxjs/toolkit";
import { filmsService } from "../../services/films";

export const getFilms = createAsyncThunk(
  "films/getFilms",
  async (_, thunkApi) => {
    try {
      const { results } = await filmsService.getFilms();
      return results;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.code);
    }
  }
);
