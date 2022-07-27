import { api } from ".";

class VehiclesService {
  async getVehicles(): Promise<any> {
    const res = await api.get(`vehicles`);
    return res;
  }
  async getVehicleByID(id: number): Promise<any> {
    const resByID = await api.get(`vehicles/${id}/`);
    return resByID;
  }
}

export const vehiclesService = new VehiclesService();
