import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/maintanance/";

class MaintenanceService {
  getMaintenanceHelper() {
    return axios.get(API_URL + "helper", {
      headers: { Authorization: authHeader() },
    });
  }
  getMaintenance(item_class, item_type) {
    const params = { item_class, item_type };
    return axios.get(API_URL, {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  postMaintenance(payload) {
    return axios.post(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
  putMaintenance(payload) {
    return axios.put(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new MaintenanceService();
