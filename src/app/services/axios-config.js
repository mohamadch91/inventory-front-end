import axios from "axios";
import toast from "react-hot-toast";
import { responseMessages } from "../constants/response-messages";

const ApiManager = axios.create({});

ApiManager.interceptors.response.use(
  (response) => {
    if (response.config.method !== "get") {
      const message =
        responseMessages[response.status]?.fa || responseMessages.success.fa;
      toast.success(message);
    }
    return response;
  },
  (error) => {
    const { response } = error;
    if (response?.status === 403) {
      window.location.href = `/error-pages/error-403`;
    }
    const message =
      responseMessages[response.status]?.fa || responseMessages.failed.fa;
    toast.error(message);

    return Promise.reject(error);
  }
);

export default ApiManager;
