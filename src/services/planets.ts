import { api } from ".";

class PlanetsService {
  async getPlanets(): Promise<any> {
    const res = await api.get(`planets`);
    return res;
  }
  async getPlanetByID(id: number): Promise<any> {
    const resByID = await api.get(`planets/${id}/`);
    return resByID;
  }
}

export const planetsService = new PlanetsService();
