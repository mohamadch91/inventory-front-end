import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/help/";

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
