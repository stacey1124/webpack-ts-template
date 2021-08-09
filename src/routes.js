import { Home } from "./views/HomeLayout.tsx";
import App from "./views";

export default [
  {
    path: "/",
    exact: true,
    component: App,
  },
  {
    path: "/home/",
    exact: true,
    component: Home,
  },
];
