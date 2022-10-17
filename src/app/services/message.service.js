import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8000/message/";

class MessageService {
  getReceivedMessages() {
    return axios.get(API_URL, {
      headers: { Authorization: authHeader() },
    });
  }
  getSentMessages() {
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
  getfacilities(){
    
  }
}

export default new MessageService();
