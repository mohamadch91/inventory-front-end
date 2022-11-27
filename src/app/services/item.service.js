import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "https://tlsapi.invgap.org/item/";

class ItemService {
  getItems(id, facility, deleted, filters) {
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
    for (const key in filters) {
      params[key] = filters[key];
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
  getItemClassesAndTypes(parent) {
    const params = {};
    if (parent) {
      params.parent = parent;
    }
    return ApiManager.get(API_URL + "item-field", {
      headers: { Authorization: authHeader() },
      params,
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
    return ApiManager.get(API_URL + "qr/getqr?" + payload, {
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
