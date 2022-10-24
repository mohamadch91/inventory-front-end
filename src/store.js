import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./app/reducers";

/**
 * Create a redux store with the root reducer and middleware
 * @type {Store}
 * @property {Object} state - the state of the store
 * @property {Function} dispatch - the dispatch function of the store
 * @property {Function} subscribe - the subscribe function of the store
 * 
 */
const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
