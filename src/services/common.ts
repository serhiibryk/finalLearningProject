import { api } from ".";

class CommonService {
  async getCommon(): Promise<any> {
    const res = await api.get(`/`);
    return res;
  }
}

export const commonService = new CommonService();
