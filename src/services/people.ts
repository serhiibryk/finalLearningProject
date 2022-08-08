import { api } from ".";

class PeopleService {
  async getPeople(id: number): Promise<any> {
    const res = await api.get(`people/?page=${id}`);
    return res;
  }
  async getPeopleByID(id: number): Promise<any> {
    const resByID = await api.get(`people/${id}/`);
    return resByID;
  }
}

export const peopleService = new PeopleService();
