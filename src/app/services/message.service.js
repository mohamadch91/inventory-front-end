import axios from "axios";
import ApiManager from "./axios-config";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8000/message/";

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
  getfacilities(){
    return ApiManager.get(API_URL+'helper', {
      headers: { Authorization: authHeader() },
    });

  }
}

export default new MessageService();
