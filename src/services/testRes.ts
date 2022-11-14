import { apiCars } from './test';

class DataService {
  async getPostDataCars(infoOfPage: any, data: any): Promise<any> {
    const { page, pageSize, searchTerm, dir, ordering } = infoOfPage;

    const res = await apiCars.post(
      `/cars/paginate?page=${page}&pageSize=${pageSize}&searchTerm=${searchTerm}&dir=${dir}&ordering=${ordering}`,
      data
    );
    return res.data;
  }
}

export const dataService = new DataService();
