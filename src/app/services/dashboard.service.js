import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "https://tlsapi.invgap.org/dashboard";

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
    return ApiManager.get(API_URL + "/maintenancelog" + payload, {
      headers: { Authorization: authHeader() },
    });
  }
}
export default new DashboardService();
