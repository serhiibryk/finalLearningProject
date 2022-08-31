import { api } from '.';

class FilmsService {
  async getFilms(): Promise<DataFromAPI<Films[]>> {
    const res = await api.get(`films`);
    return res.data;
  }
  async getFilmByID(id: number): Promise<Films> {
    const resByID = await api.get(`films/${id}/`);
    return resByID.data;
  }
}

export const filmsService = new FilmsService();
