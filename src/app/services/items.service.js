import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/items/";
const Related_API_URL = "http://5.182.47.38:8001/related/";

class ItemService {
  getItemClasses() {
    return axios.get(API_URL + "itemClass", {
      headers: { Authorization: authHeader() },
    });
  }
  putItemClass(data) {
    // change item class
    return axios.put(API_URL + "itemClass", data, {
      headers: { Authorization: authHeader() },
    });
  }
  getItemTypes() {
    return axios.get(API_URL + "itemType", {
      headers: { Authorization: authHeader() },
    });
  }
  postItemType(data) {
    // add item type
    return axios.post(API_URL + "itemType", data, {
      headers: { Authorization: authHeader() },
    });
  }
  putItemTypes(data) {
    // change item type
    return axios.put(API_URL + "itemType", data, {
      headers: { Authorization: authHeader() },
    });
  }
  getItemClassesOfAnItemType(itemTypeId) {
    return axios.get(API_URL + "itembyclass?id=" + itemTypeId, {
      headers: { Authorization: authHeader() },
    });
  }
  getActiveItemClassesWithFields(itemClassId) {
    const params = {};
    if (itemClassId) {
      params["id"] = itemClassId;
    }
    return axios.get(API_URL + "itembyclass", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  getItemTinLevels(level) {
    const params = {};
    if (level) {
      params["level"] = level;
    }
    return axios.get(API_URL + "itemTinLevels", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  putItemTypeInClass(payload) {
    return axios.put(API_URL + "itemTinLevels", payload, {
      headers: { Authorization: authHeader() },
    });
  }
  getItemFields() {
    return axios.get(Related_API_URL + "item-fields", {
      headers: { Authorization: authHeader() },
    });
  }
  putItemFields(data) {
    // change item type
    return axios.put(Related_API_URL + "item-fields", data, {
      headers: { Authorization: authHeader() },
    });
  }
  getRelatedItemType(id) {
    const params = {};
    if (id) {
      params["id"] = id;
    }
    return axios.get(Related_API_URL + "related-item-type", {
      headers: { Authorization: authHeader() },
      params,
    });
  }
  putRelatedItemType(payload) {
    return axios.put(Related_API_URL + "related-item-type", payload, {
      headers: { Authorization: authHeader() },
    });
  }
  getManufacturers() {
    return axios.get(API_URL + "manufacturer", {
      headers: { Authorization: authHeader() },
    });
  }
  postManufacturer(data) {
    return axios.post(API_URL + "manufacturer", data, {
      headers: { Authorization: authHeader() },
    });
  }
  putManufacturer(data) {
    return axios.put(API_URL + "manufacturer", data, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new ItemService();
