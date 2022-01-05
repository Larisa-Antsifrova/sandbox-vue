import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: () =>
      import(/* webpackChunkName: "brazil" */ '../views/Brazil.vue'),
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: () =>
      import(/* webpackChunkName: "hawaii" */ '../views/Hawaii.vue'),
  },
  {
    path: '/panama',
    name: 'panama',
    component: () =>
      import(/* webpackChunkName: "panama" */ '../views/Panama.vue'),
  },
];

const router = new VueRouter({
  linkExactActiveClass: 'navigation-test-active-class',
  routes,
});

export default router;
