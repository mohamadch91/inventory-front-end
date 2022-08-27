import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/reports/";

class ReportService {
  getDownloadLinks() {
    return axios.get(API_URL + "excel", {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new ReportService();
