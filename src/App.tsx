import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./views";
import { Home } from "./views/HomeLayout";
import { UploadImage } from "./views/upload";

export default () => (
  <div>
    {/* 注释掉BrowserRouter之后，浏览器端，第二次跳转路由时报错 
    用BrowserRouter， 服务端渲染报错？？？需解决
    */}
    {/* <Router> */}
    <Route>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/home/" component={Home}></Route>
        <Route path="/upload/image" component={UploadImage}></Route>
      </Switch>
    </Route>
    {/* </Router> */}
  </div>
);
