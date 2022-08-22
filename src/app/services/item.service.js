import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8000/item/";

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
