import { createAsyncThunk } from "@reduxjs/toolkit";
import { planetsService } from "../../services/planets";

export const getPlanets = createAsyncThunk(
  "planets/getPlanets",
  async (page: number, thunkApi) => {
    try {
      const { results, count } = await planetsService.getPlanets(page);
      return { planets: results, count };
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.code);
    }
  }
);
