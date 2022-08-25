import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/facilities/";

class FacilitiesService {
  getFacilities(id) {
    const params = {};
    if (id) {
      params.id = id;
    }
    return axios.get(API_URL, {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getSubFacilities(id) {
    const params = { id };
    return axios.get(API_URL + "parent", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getFacilityFields() {
    return axios.get(API_URL + "facility-field", {
      headers: { Authorization: authHeader() },
    });
  }
  postFacility(payload) {
    return axios.post(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
  putFacility(payload) {
    return axios.put(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new FacilitiesService();
