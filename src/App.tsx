import React from "react";
import App from "./views";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default () => (
  <div>
    <Router>
      <Switch>
        <Route path="/" exact component={App}></Route>
      </Switch>
    </Router>
  </div>
);
