import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/destination/:slug",
    name: "details",
    // When props is set to true, the route.params will be set as the component props.
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "details" */ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "experienceDetails" */ "../views/ExperienceDetails.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "navigation-test-active-class",
  routes,
});

export default router;
