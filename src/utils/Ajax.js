// import axios from "axios";
// import Tips from "./Tips";
// import { getAjaxError } from "./Util";
// import qs from "qs";

// /**
//  * 发送ajax请求
//  * */
// axios.interceptors.request.use((config) => {
//   //console.log(qs.stringify(config.data));
//   if (
//     config["headers"]["Content-Type"] !== "application/x-www-form-urlencoded" &&
//     config["headers"]["Content-Type"] !== "multipart/form-data;charset=UTF-8"
//   ) {
//     config.data = qs.stringify(config.data);
//   }

//   if (config["headers"]["Content-Type"] === undefined) {
//     config["headers"]["Content-Type"] = "application/x-www-form-urlencoded";
//   }

//   return config;
// });

// axios.interceptors.response.use(
//   (response) => {
//     if (response.status > 300) {
//       new Tips("请求错误");
//     } else {
//       if (
//         response.data.hasOwnProperty("err_no") &&
//         response.data.err_no != "0"
//       ) {
//         new Tips(getAjaxError(response.data));
//       } else {
//         Object.keys(response.data).forEach((key) => {
//           const newData = response.data[key];
//           if (
//             typeof newData === "obejct" &&
//             newData.hasOwnProperty("err_no") &&
//             newData.err_no != "0"
//           ) {
//             new Tips(getAjaxError(newData));
//           }
//         });
//       }
//     }
//     return response;
//   },
//   (err) => {
//     new Tips("请求错误");
//     return Promise.reject(err);
//   }
// );

// export default axios;
