import authHeader from "./auth-header";
import ApiManager from "./axios-config";

const API_URL = "https://tlsapi.invgap.org/settings/";
const URL = "https://tlsapi.invgap.org";
class UserService {
  getPublicContent() {
    return ApiManager.get(API_URL + "all");
  }
  addcountry(country) {
    return ApiManager.post(API_URL + "country/", country, {
      headers: { Authorization: authHeader() },
    });
  }
  editcountry(country) {
    return ApiManager.put(API_URL + "country/", country, {
      headers: {
        Authorization: authHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
  }
  addlevel(level) {
    return ApiManager.post(API_URL + "level", level, {
      headers: { Authorization: authHeader() },
    });
  }
  getLevels() {
    return ApiManager.get(API_URL + "level", {
      headers: { Authorization: authHeader() },
    });
  }
  putLevels(level) {
    return ApiManager.put(API_URL + "level", level, {
      headers: { Authorization: authHeader() },
    });
  }
  getUserBoard() {
    return ApiManager.get(API_URL + "user", {
      headers: { Authorization: authHeader() },
    });
  }

  getModeratorBoard() {
    return ApiManager.get(API_URL + "mod", {
      headers: { Authorization: authHeader() },
    });
  }

  getAdminBoard() {
    return ApiManager.get(API_URL + "admin", {
      headers: { Authorization: authHeader() },
    });
  }
  getUserimage(url) {
    return ApiManager.get(URL + url, {
      headers: { Authorization: authHeader() },
    });
  }
  getpqs4() {
    return ApiManager.get(URL + "/pqs/4", {
      headers: { Authorization: authHeader() },
    });
  }
  addpqs4(data) {
    return ApiManager.post(URL + "/pqs/4", data, {
      headers: { Authorization: authHeader() },
    });
  }
  getpqs3() {
    return ApiManager.get(URL + "/pqs/3", {
      headers: { Authorization: authHeader() },
    });
  }
  addpqs3(data) {
    return ApiManager.post(URL + "/pqs/3", data, {
      headers: { Authorization: authHeader() },
    });
  }
  changePassword(id, data) {
    return ApiManager.put(URL + "/auth/change_password/" + id + "/", data, {
      headers: { Authorization: authHeader() },
    });
  }
  updateUser(id, data) {
    return ApiManager.put(URL + "/auth/update_profile/" + id + "/", data, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new UserService();
