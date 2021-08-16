import React from "react";
import * as ReactDom from "react-dom";
// import store from "./src/store";
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./src/App";
// import "babel-polyfill";
ReactDom.hydrate(
  // <Provider store={store}>
  <Router>
    {/* <Route> */}
    <App />
    {/* </Route>, */}
  </Router>,
  // </Provider>,
  document.getElementById("root")
);
