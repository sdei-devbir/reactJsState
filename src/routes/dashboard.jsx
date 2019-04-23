import App from "../App";
import About from "../components/about";
import List from "../components/list";

const dashboardRoutes = [
  
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/list",
    name: "List",
    component: List
  }, 
  {
    path: "/",
    name: "Home",
    component: App
  },  
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade
  // },
  { redirect: true, path: "/", to: "/", name: "Home" }
];

export default dashboardRoutes;