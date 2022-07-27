import { api } from ".";

class StarshipsService {
  async getStarships(): Promise<any> {
    const res = await api.get(`starships`);
    return res;
  }
  async getStarshipByID(id: number): Promise<any> {
    const resByID = await api.get(`starships/${id}/`);
    return resByID;
  }
}

export const starshipsService = new StarshipsService();
