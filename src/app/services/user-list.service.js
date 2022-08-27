import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/auth/";

class UserListService {
  getUsersByFacilityId(id) {
    return ApiManager.get(API_URL + "get-users/?id=" + id, {
      headers: { Authorization: authHeader() },
    });
  }
  updateUser(data) {
    return ApiManager.put(API_URL + "update_profile/" + data.pk + "/", data, {
      headers: { Authorization: authHeader() },
    });
  }
  addUser(data) {
    return ApiManager.post(API_URL + "register/", data, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new UserListService();
