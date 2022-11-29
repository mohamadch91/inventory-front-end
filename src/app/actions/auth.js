import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";
import AuthService from "../services/auth.service";
import { VerticalAlignBottom } from "@mui/icons-material";
/*
import Authentication servisece from services folder
*/
/**
 * @param  {string} username get username for register
 * @param  {string} email get email for register
 * @param  {string} password get password for register
 * @returns {dispatch} dispatch
 * if you register successfully, you will get a message
 * if you register fail, you will get a message
 * if you want to add register function please add it in the auth.service.js
 * and add the action in the auth.js
 * and add the reducer in the auth.js
 * and add the type in the auth.js
 * and uncomment the register function in the auth.service.js
 * and uncomment the register function in the auth.js
 */
// export const register = (username, email, password) => (dispatch) => {
//   return AuthService.register(username, email, password).then(
//     (response) => {
//       dispatch({
//         type: REGISTER_SUCCESS,
//       });

//       dispatch({
//         type: SET_MESSAGE,
//         payload: response.data.message,
//       });

//       return Promise.resolve();
//     },
//     (error) => {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       dispatch({
//         type: REGISTER_FAIL,
//       });

//       dispatch({
//         type: SET_MESSAGE,
//         payload: message,
//       });

//       return Promise.reject();
//     }
//   );
// };

/**
 * 
 * @param  {string} username user USERNAME
 * @param  {string} password user password
 * @returns {dispatch} dispatch 
 * if you login successfully, you will get a message
 * if you login fail, you will get a message
 * function for user login
 */
export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      }); 

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
/**
 * function for login reducer
 * @returns {dispatch} dispatch
 * @param  {type_of_reducer} =>(dispatch)
 */
export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
