import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/languages/";

class HRService {
  getTranslations() {
    return ApiManager.get(API_URL, {
      headers: { Authorization: authHeader() },
    });
  }
  getTranslationsByQuery(query) {
    return ApiManager.get(API_URL + query, {
      headers: { Authorization: authHeader() },
    });
  }
  putTranslations(data) {
    return ApiManager.put(API_URL, data, {
      headers: { Authorization: authHeader() },
    });
  }
  postTranslations(data) {
    return ApiManager.post(API_URL, data, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new HRService();
