import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";
/**
 * @param  {string} message message of dispatches functions
 * @param  {SET_MESSAGE} type imported from types.js
 * @param  {message} payload message set the message for paiload of functions
 * function for set messages
 */
export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});
/**
 * @param  {CLEAR_MESSAGE} type imported from types.js 
  * function for clear messages
*/

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
