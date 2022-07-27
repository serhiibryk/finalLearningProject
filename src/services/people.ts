import { api } from ".";

class PeopleService {
  async getPeople(): Promise<any> {
    const res = await api.get(`people`);
    return res;
  }
  async getPeopleByID(id: number): Promise<any> {
    const resByID = await api.get(`people/${id}/`);
    return resByID;
  }
}

export const peopleService = new PeopleService();
