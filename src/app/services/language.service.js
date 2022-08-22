import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8000/languages/";

class HRService {
  getTranslations() {
    return axios.get(API_URL, {
      headers: { Authorization: authHeader() },
    });
  }
  getTranslationsByQuery(query) {
    return axios.get(API_URL + query, {
      headers: { Authorization: authHeader() },
    });
  }
  putTranslations(data) {
    return axios.put(API_URL, data, {
      headers: { Authorization: authHeader() },
    });
  }
  postTranslations(data) {
    return axios.post(API_URL, data, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new HRService();
