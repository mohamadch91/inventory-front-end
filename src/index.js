import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import { Suspense } from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import "./i18n";
import { QueryClient, QueryClientProvider } from "react-query";
/**
 * define the query client
 * @type {QueryClient}
 * @property {Object} defaultOptions - the default options of the query client
 * @property {Object} defaultOptions.queries - the default options of the queries
 * 
 */
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 0 } },
});

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
