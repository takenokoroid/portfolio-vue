import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home.vue";
import Work from "../pages/work.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/works",
    name: "works",
    component: Work
  }
];

const router = new VueRouter({
  routes
});

export default router;
