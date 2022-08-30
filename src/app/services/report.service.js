import authHeader from "./auth-header";
import ApiManager from "./axios-config";

const API_URL = "http://5.182.47.38:8001/reports/";

class ReportService {
  getDownloadLinks() {
    return ApiManager.get(API_URL + "excel", {
      headers: { Authorization: authHeader() },
    });
  }
  getFacSeg(params) {
    return ApiManager.get(API_URL + "facseg", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getSubFacPop(params) {
    return ApiManager.get(API_URL + "subfacpop", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
}

export default new ReportService();
