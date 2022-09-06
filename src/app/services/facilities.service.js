import ApiManager from "./axios-config";
import authHeader from "./auth-header";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/facilities/";

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
  deleteFacility(id) {
    return ApiManager.delete(API_URL, {
      headers: { Authorization: authHeader() },
      data: { id },
    });
  }
  getFacilityFields(params) {
    return ApiManager.get(API_URL + "facility-field", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getFacilityFields1(params) {
    return ApiManager.get(API_URL + "print", {
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
      "http://127.0.0.1:8000facilities/" + "import",
      payload,
      {
        headers: { Authorization: authHeader() },
      }
    );
  }
}

export default new FacilitiesService();
