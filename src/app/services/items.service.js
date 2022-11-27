import authHeader from "./auth-header";
import ApiManager from "./axios-config";

const API_URL = "https://tlsapi.invgap.org/items/";

class ItemService {
  getItemClasses() {
    return ApiManager.get(API_URL + "itemClass", {
      headers: { Authorization: authHeader() },
    });
  }
  getActiveItemClasses() {
    return ApiManager.get(API_URL + "class-helper", {
      headers: { Authorization: authHeader() },
    });
  }
  putItemClass(data) {
    // change item class
    return ApiManager.put(API_URL + "itemClass", data, {
      headers: { Authorization: authHeader() },
    });
  }
  getItemTypes() {
    return ApiManager.get(API_URL + "itemType", {
      headers: { Authorization: authHeader() },
    });
  }
  postItemType(data) {
    // add item category
    return ApiManager.post(API_URL + "itemType", data, {
      headers: { Authorization: authHeader() },
    });
  }
  putItemTypes(data) {
    // change item category
    return ApiManager.put(API_URL + "itemType", data, {
      headers: { Authorization: authHeader() },
    });
  }
  getItemTypesOfItemClass(itemClassId) {
    return ApiManager.get(API_URL + "itembyclass?id=" + itemClassId, {
      headers: { Authorization: authHeader() },
    });
  }
  getActiveItemClassesWithFields(itemClassId) {
    const params = {};
    if (itemClassId) {
      params["id"] = itemClassId;
    }
    return ApiManager.get(API_URL + "itembyclass", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getItemTinLevels(level) {
    const params = {};
    if (level) {
      params["level"] = level;
    }
    return ApiManager.get(API_URL + "itemTinLevels", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  putItemTypeInClass(payload) {
    return ApiManager.put(API_URL + "itemTinLevels", payload, {
      headers: { Authorization: authHeader() },
    });
  }
  getManufacturers(id) {
    return ApiManager.get(API_URL + "manufacturer?id=" + id, {
      headers: { Authorization: authHeader() },
    });
  }
  postManufacturer(data) {
    return ApiManager.post(API_URL + "manufacturer", data, {
      headers: { Authorization: authHeader() },
    });
  }
  putManufacturer(data) {
    return ApiManager.put(API_URL + "manufacturer", data, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new ItemService();
