import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/settings/";
const URL="http://5.182.47.38:8001";
class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }
  addcountry(country) {
    return axios.post(API_URL + "country/", country, {
      headers: { Authorization: authHeader() },
    });
  }
  editcountry(country) {
    return axios.put(API_URL + "country/", country, {
      headers: {
        Authorization: authHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
  }
  addlevel(level) {
    return axios.post(API_URL + "level", level, {
      headers: { Authorization: authHeader() },
    });
  }
  getLevels() {
    return axios.get(API_URL + "level", {
      headers: { Authorization: authHeader() },
    });
  }
  putLevels(level) {
    return axios.put(API_URL + "level", level, {
      headers: { Authorization: authHeader() },
    });
  }
  getUserBoard() {
    return axios.get(API_URL + "user", {
      headers: { Authorization: authHeader() },
    });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", {
      headers: { Authorization: authHeader() },
    });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", {
      headers: { Authorization: authHeader() },
    });
  }
  getUserimage(url) {
    return axios.get(URL + url, {
      headers: { Authorization: authHeader() },
    });
  }
  getpqs4() {
    return axios.get(URL + "/pqs/4", {
      headers: { Authorization: authHeader() },
    });
  }
  addpqs4(data) {
    return axios.post(URL + "/pqs/4", data, {
      headers: { Authorization: authHeader() },
    });
  }
  getpqs3() {
    return axios.get(URL + "/pqs/3", {
      headers: { Authorization: authHeader() },
    });
  }
  addpqs3(data) {
    return axios.post(URL + "/pqs/3", data, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new UserService();
