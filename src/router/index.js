import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Home from "../views/Home";

const routes = [
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
