import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "https://tlsapi.invgap.org/related/";

class RelatedService {
  getParameters() {
    return ApiManager.get(API_URL + "params", {
      headers: { Authorization: authHeader() },
    });
  }
  getParameterDescriptions(id, type) {
    return ApiManager.get(API_URL + "params/?id=" + id + "&type=" + type, {
      headers: { Authorization: authHeader() },
    });
  }
  putParameters(data) {
    return ApiManager.put(API_URL + "params/", data, {
      headers: { Authorization: authHeader() },
    });
  }
  getItemFields() {
    return ApiManager.get(API_URL + "item-fields", {
      headers: { Authorization: authHeader() },
    });
  }
  putItemFields(data) {
    // change item type
    return ApiManager.put(API_URL + "item-fields", data, {
      headers: { Authorization: authHeader() },
    });
  }
  getRelatedItemType(id) {
    const params = {};
    if (id) {
      params["id"] = id;
    }
    return ApiManager.get(API_URL + "related-item-type", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  putRelatedItemType(payload) {
    return ApiManager.put(API_URL + "related-item-type", payload, {
      headers: { Authorization: authHeader() },
    });
  }
  getRelatedFacility() {
    return ApiManager.get(API_URL + "related-facility/", {
      headers: { Authorization: authHeader() },
    });
  }
  putRelatedFacility(payload) {
    return ApiManager.put(API_URL + "related-facility/", payload, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new RelatedService();
