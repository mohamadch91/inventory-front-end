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
const API_URL = "http://5.182.47.38:8001/auth/login/";
const USER_PROFILE = "http://5.182.47.38:8001/user-data/";
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
    return axios
      .post(API_URL , { username, password })
      .then((response) => {
        /**
         * if login success then save token to local storage
         */
        if (response.data.access) {
         const user={
           refresh:response.data.refresh,
            access:response.data.access,
         }
         /**
          * get user profile from api
          */
         return axios.get(USER_PROFILE  ,  { headers: {Authorization:"Bearer "+user.access} }).then
          (res=>{
            /**
             * if user profile is not null then save user profile to local storage
             */
            const country=res.data.country;
            user.id=res.data.user.pk;
            user.admin=res.data.user.is_superuser;
            user.name=res.data.user.name;
            user.username=res.data.user.username;
            user.idnumber=res.data.user.idnumber;
            user.phone=res.data.user.phone;
            user.facility_admin=res.data.user.facadmin;
            user.facility_id=res.data.user.facilityid;
            user.reportadmin=res.data.user.reportadmin;
            user.useradmin=res.data.user.useradmin;
            user.created_at=res.data.user.created_at.split("T")[0];
            user.updated_at=res.data.user.updated_at.split("T")[0];
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("country", JSON.stringify(country));
          return response.data;
          })
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
