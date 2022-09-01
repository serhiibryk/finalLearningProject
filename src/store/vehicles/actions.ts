import { createAsyncThunk } from '@reduxjs/toolkit';

import { vehiclesService } from '../../services/vehicles';

export const getVehicles = createAsyncThunk('vehicles/getVehicles', async (page: number, thunkApi) => {
  try {
    const { results, count } = await vehiclesService.getVehicles(page);
    return { vehicles: results, count };
  } catch (e) {
    let message = 'Unknown Error';
    if (e instanceof Error) message = e.message;
    return thunkApi.rejectWithValue(message);
  }
});
