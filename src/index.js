import React from "react";
import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

import App from "./components/App";
const store = createStore(reducers, applyMiddleware(thunk));
const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
