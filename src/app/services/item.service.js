import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8000/item/";

class ItemService {
  getItems(id, facility, deleted) {
    const params = {};
    if (id) {
      params.id = id;
    }
    if (facility) {
      params.facility = facility;
    }
    if (deleted) {
      params.deleted = deleted;
    }
    return ApiManager.get(API_URL, {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  // deleteItem(id) {
  //   return ApiManager.delete(API_URL, {
  //     headers: { Authorization: authHeader() },
  //     data: { id },
  //   });
  // }
  getItemClassesAndTypes() {
    return ApiManager.get(API_URL + "item-field", {
      headers: { Authorization: authHeader() },
    });
  }
  getPQS(id) {
    const params = { id };
    return ApiManager.get(API_URL + "itempqs", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getItemFields(class_id, type_id, parent) {
    const params = {
      class_id,
      type_id,
    };
    if (parent) {
      params.parent = parent;
    }
    return ApiManager.get(API_URL + "item-field", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  postItem(payload) {
    return ApiManager.post(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }
  putItem(payload) {
    return ApiManager.put(API_URL, payload, {
      headers: { Authorization: authHeader() },
    });
  }

  getQrHelper() {
    return ApiManager.get(API_URL + "qr/helper", {
      headers: { Authorization: authHeader() },
    });
  }

  getQrTableData(payload) {
    return ApiManager.get(API_URL + "qr/list?" + payload, {
      headers: { Authorization: authHeader() },
    });
  }
  getQrData(payload) {
    return ApiManager.get(API_URL + "qr/list?" + payload, {
      headers: { Authorization: authHeader() },
    });
  }
  deleteitemparam() {
    return ApiManager.get(API_URL + "delete", {
      headers: { Authorization: authHeader() },
    });
  }
  deleteitem(payload) {
    return ApiManager.post(API_URL + "delete", payload, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new ItemService();
