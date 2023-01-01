import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "https://tlsapi.invgap.org/maintanance/";

class MaintenanceService {
  getMaintenanceHelper() {
    return ApiManager.get(API_URL + "helper", {
      headers: { Authorization: authHeader() },
    });
  }
  getMaintenance(item_class, item_type) {
    const params = { item_class, item_type };
    return ApiManager.get(API_URL, {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  postMaintenance(payload) {
    return ApiManager.post(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
  putMaintenance(payload) {
    return ApiManager.put(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
  getMaintenanceGp(item_class, item_type) {
    const params = { item_class, item_type };
    return ApiManager.get(API_URL + "gp", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  postMaintenanceGp(payload) {
    return ApiManager.post(API_URL + "gp", payload, {
      headers: { Authorization: authHeader() },
    });
  }
  putMaintenanceGp(payload) {
    return ApiManager.put(API_URL + "gp", payload, {
      headers: { Authorization: authHeader() },
    });
  }
  getMaintenanceActive(item_class, item_type, gp) {
    const params = { item_class, item_type, gp };
    return ApiManager.get(API_URL + "active", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  postMaintenanceActive(payload) {
    return ApiManager.post(API_URL + "active", payload, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new MaintenanceService();
