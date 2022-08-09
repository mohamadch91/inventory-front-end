import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/settings/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }
  addcountry(country) {
    return axios.post(API_URL+"country/" , country, { headers: { Authorization:authHeader() } });
  }
  editcountry(country) {
    return axios.put(API_URL+"country/" , country, { headers: { Authorization:authHeader(),'Content-Type': 'multipart/form-data', } });
  }
  addlevel(level) {
    return axios.post(API_URL+"level" , level, { headers: { Authorization:authHeader() } });
  }
  getLevels() {
    return axios.get(API_URL+"level" , { headers: { Authorization:authHeader() } });
  }
  getUserBoard() {
    return axios.get(API_URL + "user", { headers: { Authorization:authHeader() } });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: { Authorization:authHeader() } });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: { Authorization:authHeader() } });
  }
}

export default new UserService();
