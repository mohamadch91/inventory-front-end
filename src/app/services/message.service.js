import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://5.182.47.38:8001/message/";

class MessageService {
  getReceivedMessages() {
    return axios.get(API_URL, {
      headers: { Authorization: authHeader() },
    });
  }
  getSendedMessages() {
    return axios.get(API_URL + "?type=sender", {
      headers: { Authorization: authHeader() },
    });
  }
  sendMessage(data) {
    return axios.post(API_URL, data, {
      headers: { Authorization: authHeader() },
    });
  }
  putMessage(data) {
    return axios.put(API_URL, data, {
      headers: { Authorization: authHeader() },
    });
  }
}

export default new MessageService();
