import authHeader from "./auth-header";
import ApiManager from "./axios-config";

const API_URL = "http://5.182.47.38:8001/reports/";

class ReportService {
  getDownloadLinks() {
    return ApiManager.get(API_URL + "excel", {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new ReportService();
