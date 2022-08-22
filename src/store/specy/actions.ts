import { createAsyncThunk } from "@reduxjs/toolkit";
import { speciesService } from "../../services/species";

export const getSpecy = createAsyncThunk(
  "specy/getSpecy",
  async (page: number, thunkApi) => {
    try {
      const { results, count } = await speciesService.getSpecies(page);
      return { specy: results, count };
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.code);
    }
  }
);
