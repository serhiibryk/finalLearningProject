import { api } from ".";

class FilmsService {
  async getFilms(): Promise<any> {
    const res = await api.get(`films`);
    return res;
  }
  async getFilmByID(id: number): Promise<any> {
    const resByID = await api.get(`films/${id}/`);
    return resByID;
  }
}

export const filmsService = new FilmsService();
