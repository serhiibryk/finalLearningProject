import { api } from ".";

class StarshipsService {
  async getStarships(id: number): Promise<any> {
    const res = await api.get(`starships/?page=${id}`);
    return res;
  }
  async getStarshipByID(id: number): Promise<any> {
    const resByID = await api.get(`starships/${id}/`);
    return resByID;
  }
}

export const starshipsService = new StarshipsService();
