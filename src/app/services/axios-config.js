import axios from "axios";
import toast from "react-hot-toast";
import { responseMessages } from "../constants/response-messages";

const ApiManager = axios.create({});

ApiManager.interceptors.request.use(async (request) => {
  if (request.method !== "get")
    request.headers["xId"] = toast.loading("loading...");
  return request;
});

ApiManager.interceptors.response.use(
  (response) => {
    const toastId = response.config.headers?.xId;
    if (toastId) {
      const message =
        responseMessages[response.status]?.fa || responseMessages.success.fa;

      toast.success(message, {
        id: toastId,
      });
    }
    return response;
  },
  (error) => {
    const { response } = error;

    if (response) {
      const toastId = response.config.headers?.xId;
      if (toastId) {
        const message =
          responseMessages[response.status]?.fa || responseMessages.failed.fa;

        toast.error(message, {
          id: toastId,
        });
      }
    } else {
      toast.remove();
    }
    return Promise.reject(error);
  }
);

export default ApiManager;
