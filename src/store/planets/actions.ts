import { createAsyncThunk } from '@reduxjs/toolkit';
import { planetsService } from '../../services/planets';
import { infiniteScrollReducer } from '../infiniteScroll/reducer';

export const getPlanets = createAsyncThunk('planets/getPlanets', async (page: number, thunkApi) => {
  try {
    const { results, count } = await planetsService.getPlanets(page);
    return { planets: results, count };
  } catch (e) {
    let message = 'Unknown Error';
    if (e instanceof Error) message = e.message;
    return thunkApi.rejectWithValue(message);
  }
});

export const getNextPlanets = createAsyncThunk('planets/getNextPlanets', async (id: number, thunkApi) => {
  try {
    const { results, count } = await planetsService.getPlanets(id);
    thunkApi.getState();
    const state: any = thunkApi.getState();
    thunkApi.dispatch(infiniteScrollReducer.setForScroll(state.stateForScroll.stateForScroll.concat(results)));
    return { planets: results, count };
  } catch (e) {
    let message = 'Unknown Error';
    if (e instanceof Error) message = e.message;
    return thunkApi.rejectWithValue(message);
  }
});
