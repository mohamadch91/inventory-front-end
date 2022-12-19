import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "https://tlsapi.invgap.org/help/";

class HelpService {
  getHelpContent(lang, page) {
    const params = {
      lang,
      page,
    };
    return ApiManager.get(API_URL, {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  postHelpContent(payload) {
    return ApiManager.post(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
  putHelpContent(payload) {
    return ApiManager.put(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new HelpService();
