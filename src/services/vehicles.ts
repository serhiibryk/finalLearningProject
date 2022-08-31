import { api } from '.';

class VehiclesService {
  async getVehicles(id: number): Promise<DataFromAPI<Vehicles[]>> {
    const res = await api.get(`vehicles/?page=${id}`);
    return res.data;
  }

  async getVehicleByID(id: number): Promise<Vehicles> {
    const resByID = await api.get(`vehicles/${id}/`);
    return resByID.data;
  }
}

export const vehiclesService = new VehiclesService();
