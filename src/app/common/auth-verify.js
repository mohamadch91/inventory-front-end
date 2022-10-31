import React, { Component } from "react";
import { history } from '../helpers/history';
/**
 * @param  {JWTTOKEN} token
 * 
 */
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};


/**
 * @param  {state} props reducers state
 * component for check if token is  invalid logout the user check token expire time 
 * and now time if token is expired logout the user
 */
class AuthVerify extends Component {
  constructor(props) {
    super(props);
    //check for history change
    history.listen(() => {
      //GET THE TOKEN FROM THE LOCAL STORAGE
      const user = JSON.parse(localStorage.getItem("user"));
      //if user logged in  
      if (user) {
        const decodedJwt = parseJwt(user.accessToken);
        //if token is expired logout the user
        if (decodedJwt.exp * 1000 < Date.now()) {
          props.logOut();
        }
      }
    });
  }
  //render nothing
  render() {
    return <div></div>;
  }
}

export default AuthVerify;
