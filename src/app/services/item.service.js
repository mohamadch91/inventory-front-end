import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/item/";

class ItemService {
  getItems(id) {
    const params = {};
    if (id) {
      params.id = id;
    }
    return axios.get(API_URL, {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getItemClassesAndTypes() {
    return axios.get(API_URL + "item-field", {
      headers: { Authorization: authHeader() },
    });
  }
  getPQS(id) {
    const params = { id };
    return axios.get(API_URL + "itempqs", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getItemFields(class_id, type_id) {
    const params = {
      class_id,
      type_id,
    };
    return axios.get(API_URL + "item-field", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  postItem(payload) {
    return axios.post(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
  putItem(payload) {
    return axios.put(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new ItemService();
