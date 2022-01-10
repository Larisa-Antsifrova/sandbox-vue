import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/details/:slug",
    name: "details",
    component: () =>
      import(
        /* webpackChunkName: "details" */ "../views/DestinationDetails.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "navigation-test-active-class",
  routes,
});

export default router;
