import { api } from '.';

class PeopleService {
  async getPeople(id: number): Promise<DataFromAPI<People[]>> {
    const res = await api.get(`people/?page=${id}`);
    return res.data;
  }
  async getPeopleByID(id: number): Promise<People> {
    const resByID = await api.get(`people/${id}/`);
    return resByID.data;
  }
}

export const peopleService = new PeopleService();
