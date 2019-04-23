import App from "../App";
import Login from "../components/login";
import About from "../components/about";
import Info from "../components/info";
import List from "../components/list";
import Form from "../components/form";
import Post from "../components/posts";

const dashboardRoutes = [
  
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/info",
    name: "Info",
    component: Info
  },
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
    path: "/form",
    name: "Form",
    component: Form
  },  
  {
    path: "/post",
    name: "Post",
    component: Post
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