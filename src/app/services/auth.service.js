import axios from "axios";
/**
 * @description: This is the auth service class
 * @class AuthService
 *
 *
 */
/**
 * define constat for base url
 * @constant {string} API_URL Url for login api
 * @constant {string} USER_PROFILE Url for user profile api
 */
const API_URL = "https://tlsapi.invgap.org/auth/login/";
const USER_PROFILE = "https://tlsapi.invgap.org/user-data/";
class AuthService {
  /**
   *
   * @param {string} username  user username
   * @param {string} password  user password
   * @returns axios promise
   * @memberof AuthService
   * @public
   * @function login
   * @description login user
   *
   */
  login(username, password) {
    return axios.post(API_URL, { username, password }).then((response) => {
      /**
       * if login success then save token to local storage
       */
      if (response.data.access) {
        const user = {
          refresh: response.data.refresh,
          access: response.data.access,
        };
        /**
         * get user profile from api
         */
        return axios
          .get(USER_PROFILE, {
            headers: { Authorization: "Bearer " + user.access },
          })
          .then((res) => {
            let country = res.data.Country[0];

            if (country === undefined) {
              country = {};
            }
            user.id = res.data.User.pk;
            user.admin = res.data.User.is_superuser;
            user.name = res.data.User.name;
            user.username = res.data.User.username;
            user.idnumber = res.data.User.idnumber;
            user.phone = res.data.User.phone;
            user.facility_name = res.data.facility;
            user.facility_admin = res.data.User.facadmin;
            user.facility_id = res.data.User.facilityid;
            user.reportadmin = res.data.User.reportadmin;
            user.itemadmin = res.data.User.itemadmin;
            user.useradmin = res.data.User.useradmin;
            user.created_at = res.data.User.created_at.split("T")[0];
            user.updated_at = res.data.User.updated_at.split("T")[0];
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("country", JSON.stringify(country));
            return res.data;
          });
      }
    });
  }
  /**
   * remove user from local storage
   * @memberof AuthService
   * @public
   * @function logout
   */
  logout() {
    console.log("logout");
    localStorage.removeItem("user");
    localStorage.removeItem("country");
  }
  /**
   * if you done register api then you can use this function to register user
   * uncomment the code and run the app
   */
  // register(username, email, password) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password,
  //   });
  // }
}

export default new AuthService();
