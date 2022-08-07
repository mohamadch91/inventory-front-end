import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
// import "./i18n";
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store";
// import i18n from './i18n';
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter basename="">
     
    <App  />
   
  </BrowserRouter>
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();