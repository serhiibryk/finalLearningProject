import { api } from ".";

class PlanetsService {
  async getPlanets(id: number): Promise<DataFromAPI<Planets[]>> {
    const res = await api.get(`planets/?page=${id}`);
    return res.data;
  }
  async getPlanetByID(id: number): Promise<Planets> {
    const resByID = await api.get(`planets/${id}/`);
    return resByID.data;
  }
}

export const planetsService = new PlanetsService();
