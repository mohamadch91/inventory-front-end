import axios from "axios";
import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "https://tlsapi.invgap.org/message/";

class MessageService {
  getReceivedMessages() {
    return ApiManager.get(API_URL, {
      headers: { Authorization: authHeader() },
    });
  }
  getSentMessages() {
    return ApiManager.get(API_URL + "?type=sender", {
      headers: { Authorization: authHeader() },
    });
  }
  sendMessage(data) {
    return ApiManager.post(API_URL, data, {
      headers: { Authorization: authHeader() },
    });
  }
  putMessage(data) {
    return ApiManager.put(API_URL, data, {
      headers: { Authorization: authHeader() },
    });
  }
  getfacilities() {
    return ApiManager.get(API_URL + "helper", {
      headers: { Authorization: authHeader() },
    });
  }
  getUnreadMessages() {
    return ApiManager.get(API_URL + "unread-count", {
      headers: { Authorization: authHeader() },
    });
  }
  readMessage(data) {
    return ApiManager.post(API_URL + "read-message", data, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new MessageService();
