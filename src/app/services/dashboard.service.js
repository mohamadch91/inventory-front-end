import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/dashboard";

class DashboardService {
  getAllDashboardItems() {
    return ApiManager.get(API_URL + "/item", {
      headers: { Authorization: authHeader() },
    });
  }

  getAllFacilities() {
    return ApiManager.get(API_URL + "/facility", {
      headers: { Authorization: authHeader() },
    });
  }

  getAllTablesData() {
    return ApiManager.get(API_URL + "/table", {
      headers: { Authorization: authHeader() },
    });
  }
  getAllWarningsData() {
    return ApiManager.get(API_URL + "/maintenance", {
      headers: { Authorization: authHeader() },
    });
  }

  getWarningsInfo(payload) {
    return ApiManager.get(API_URL + "/todo" + payload, {
      headers: { Authorization: authHeader() },
    });
  }
  getMaintenanceLog() {
    return ApiManager.get(API_URL + "/maintenancelog", {
      headers: { Authorization: authHeader() },
    });
  }

  postWarningsAsDone(payload) {
    return ApiManager.post(API_URL + "/todo", payload, {
      headers: { Authorization: authHeader() },
    });
  }
  getLogDetails(payload) {
    console.log(API_URL + "/maintenancelog" + payload);
    return ApiManager.get(API_URL + "/maintenancelog" + payload, {
      headers: { Authorization: authHeader() },
    });
  }
}
export default new DashboardService();