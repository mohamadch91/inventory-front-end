import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://tlsapi.invgap.org/hr/";

class HRService {
  getFacilities() {
    return axios.get(API_URL + "hr-helper/", {
      headers: { Authorization: authHeader() },
    });
  }
  getHRList(id) {
    return axios.get(API_URL + "?id=" + id, {
      headers: { Authorization: authHeader() },
    });
  }
  putHR(data) {
    return axios.put(API_URL, data, {
      headers: { Authorization: authHeader() },
    });
  }
  postHR(data) {
    return axios.post(API_URL, data, {
      headers: { Authorization: authHeader() },
    });
  }
  deleteHR(data) {
    return axios.delete(API_URL, data, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new HRService();
