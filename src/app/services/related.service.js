import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/related/";

class RelatedService {
  getParameters() {
    return axios.get(API_URL + "params", {
      headers: { Authorization: authHeader() },
    });
  }
  putParameters(data) {
    return axios.put(API_URL + "params", data, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new RelatedService();
