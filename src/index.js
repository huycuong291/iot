import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // import redux-thunk
import allred from "./reducer/all-reducers";
import App from "./components/app";

const store = createStore(
  allred,
  applyMiddleware(thunk) // apply the redux-thunk middleware
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
