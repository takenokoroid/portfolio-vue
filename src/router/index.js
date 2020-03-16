import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home.vue";
import Work from "../pages/work.vue";
import Skills from "../pages/skills.vue";

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
  },
  {
    path: "/skills",
    name: "skills",
    component: Skills
  }
];

const router = new VueRouter({
  routes
});

export default router;
