import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/settings/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }
  addcountry(country) {
    return axios.post(API_URL+"country/" , country, { headers: authHeader() });
  }
  addlevel(level) {
    return axios.post(API_URL+"level" , level, { headers: authHeader() });
  }
  getLevels() {
    return axios.get(API_URL+"level" , { headers: authHeader() });
  }
  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
