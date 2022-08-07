import axios from "axios";

const API_URL = "http://5.182.47.38:8001/auth/login/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL , { username, password })
      .then((response) => {
        console.log(response);
        if (response.data.access) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
