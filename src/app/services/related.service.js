import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/related/";

class RelatedService {
  getParameters() {
    return axios.get(API_URL + "params", {
      headers: { Authorization: authHeader() },
    });
  }
  getParameterDescriptions(id, type) {
    return axios.get(API_URL + "params/?id=" + id + "&type=" + type, {
      headers: { Authorization: authHeader() },
    });
  }
  putParameters(data) {
    return axios.put(API_URL + "params/", data, {
      headers: { Authorization: authHeader() },
    });
  }
  getItemFields() {
    return axios.get(API_URL + "item-fields", {
      headers: { Authorization: authHeader() },
    });
  }
  putItemFields(data) {
    // change item type
    return axios.put(API_URL + "item-fields", data, {
      headers: { Authorization: authHeader() },
    });
  }
  getRelatedItemType(id) {
    const params = {};
    if (id) {
      params["id"] = id;
    }
    return axios.get(API_URL + "related-item-type", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  putRelatedItemType(payload) {
    return axios.put(API_URL + "related-item-type", payload, {
      headers: { Authorization: authHeader() },
    });
  }
  getRelatedFacility() {
    return axios.get(API_URL + "related-facility/", {
      headers: { Authorization: authHeader() },
    });
  }
  putRelatedFacility(payload) {
    return axios.put(API_URL + "related-facility/", payload, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new RelatedService();
