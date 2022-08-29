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
}
export default new DashboardService();
