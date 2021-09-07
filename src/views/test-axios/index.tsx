import React from "react";
import axios from "axios";
export const TestAxios = () => {
  if (process.env.NODE_ENV === "development") {
    console.log("env", process.env.NODE_ENV);
    axios.defaults.baseURL = "http://localhost.com";
  }
  const handleClick = () => {
    axios({
      url: "/getUserInfo",
      method: "get",
      responseType: "json",
    }).then((response) => {
      console.log("response", response);
    });
  };

  axios.interceptors.request.use(
    (config) => {
      if (true) {
        config.headers.Authorization = "stacey1111";
      }
      return config;
    },
    (error) => {
      return error;
    }
  );
  return (
    <>
      <div>test axios</div>
      <button onClick={handleClick}>点击发送请求</button>
    </>
  );
};
