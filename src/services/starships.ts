import { api } from '.';

class StarshipsService {
  async getStarships(id: number): Promise<DataFromAPI<Vehicles[]>> {
    const res = await api.get(`starships/?page=${id}`);
    return res.data;
  }
  async getStarshipByID(id: number): Promise<Vehicles> {
    const resByID = await api.get(`starships/${id}/`);
    return resByID.data;
  }
}

export const starshipsService = new StarshipsService();
