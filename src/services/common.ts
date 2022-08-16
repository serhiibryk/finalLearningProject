import { api } from ".";

class CommonService {
  async getCommon(): Promise<Common> {
    const res = await api.get(`/`);
    return res.data;
  }
}

export const commonService = new CommonService();
