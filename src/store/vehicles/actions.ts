import { createAsyncThunk } from "@reduxjs/toolkit";
import { starshipsService } from "../../services/starships";
import { vehiclesService } from "../../services/vehicles";

export const getVehicles = createAsyncThunk(
  "vehicles/getVehicles",
  async (page: number, thunkApi) => {
    try {
      const { results, count } = await vehiclesService.getVehicles(page);
      return { vehicles: results, count };
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.code);
    }
  }
);
