import { api } from ".";

class SpeciesService {
  async getSpecies(id: number): Promise<any> {
    const res = await api.get(`species/?page=${id}`);
    return res;
  }
  async getSpeccyByID(id: number): Promise<any> {
    const resByID = await api.get(`species/${id}/`);
    return resByID;
  }
}

export const speciesService = new SpeciesService();
