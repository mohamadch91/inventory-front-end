import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8000/help/";

class HelpService {
  getHelpContent(lang, page) {
    const params = {
      lang,
      page,
    };
    return axios.get(API_URL, {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  postHelpContent(payload) {
    return axios.post(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
  putHelpContent(payload) {
    return axios.put(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new HelpService();
