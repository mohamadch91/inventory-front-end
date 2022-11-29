/**
 * define EVENTBUS as a global variable
 * @type {EventBus}
 * @param  {EventBus} EventBus
 * like a bus for dispatches functions
 * all around the app
 */
const eventBus = {
  
  /**
   * @param  {event} event input event
   * @param  {function} callback function for when event is fired
  //  * @param  {boolean} once if true, the event will be fired only once and then removed you can add this param
   */
  on(event, callback) {
    // add listener for event
    document.addEventListener(event, (e) => callback(e.detail));
  },
  
  /**
   * @param  {event} event dispatched evenet
   * @param  {any} data data for the event
   * dispatches the event defined in the on function
   */
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  
  /**
   * @param  {event} event defined evenet
   * @param  {function} callback defined function
   * remove the event defined in the on function
   * 
   */
  remove(event, callback) {
    document.removeEventListener(event, callback);
  },
};

export default eventBus;
