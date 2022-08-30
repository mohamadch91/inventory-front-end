import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/item/";

class ItemService {
  getItems(id) {
    const params = {};
    if (id) {
      params.id = id;
    }
    return ApiManager.get(API_URL, {
      headers: { Authorization: authHeader() },
      params,
    });
  }
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
  getItemFields(class_id, type_id) {
    const params = {
      class_id,
      type_id,
    };
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
    console.log("now requesting to ", API_URL + "qr/list?" + payload);
    return ApiManager.get(API_URL + "qr/list?" + payload, {
      headers: { Authorization: authHeader() },
    });
  }
  getQrData(payload) {
    console.log("now requesting to ", API_URL + "qr/getqr?" + payload);
    return ApiManager.get(API_URL + "qr/list?" + payload, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new ItemService();
