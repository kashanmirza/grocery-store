import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@pages/home/Home.vue";
import BestSelling from "@pages/best-selling/BestSelling.vue";
import About from "@pages/about/About.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/best-selling",
    name: "Best Selling",
    component: BestSelling,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
