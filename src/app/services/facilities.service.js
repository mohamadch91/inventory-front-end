import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/facilities/";

class FacilitiesService {
  getFacilities(id) {
    const params = {};
    if (id) {
      params.id = id;
    }
    return ApiManager.get(API_URL, {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getSubFacilities(id) {
    const params = { id };
    return ApiManager.get(API_URL + "parent", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getFacilityFields(params) {
    return ApiManager.get(API_URL + "facility-field", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  postFacility(payload) {
    return ApiManager.post(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
  putFacility(payload) {
    return ApiManager.put(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
  importFacilities(payload) {
    return ApiManager.post(
      "http://5.182.47.38:8001facilities/" + "import",
      payload,
      {
        headers: { Authorization: authHeader() },
      }
    );
  }
}

export default new FacilitiesService();
