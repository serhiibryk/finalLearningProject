import { createAsyncThunk } from "@reduxjs/toolkit";
import { peopleService } from "../../services/people";

export const getPeoples = createAsyncThunk(
  "people/getPeoples",
  async (page: number, thunkApi) => {
    try {
      const { results, count } = await peopleService.getPeople(page);
      return { people: results, count };
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.code);
    }
  }
);
