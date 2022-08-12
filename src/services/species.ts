import { api } from ".";

class SpeciesService {
  async getSpecies(id: number): Promise<DataFromAPI<Species[]>> {
    const res = await api.get(`species/?page=${id}`);
    return res.data;
  }
  async getSpeccyByID(id: number): Promise<Species> {
    const resByID = await api.get(`species/${id}/`);
    return resByID.data;
  }
}

export const speciesService = new SpeciesService();
