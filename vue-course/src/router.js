import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ApartmentPage from './pages/ApartmentPage.vue';
import RegistrationPage from './pages/RegistrationPage.vue';
import MyOrdersPage from './pages/MyOrdersPage.vue';
import LoginPage from './pages/LoginPage.vue';
import ErrorPage from './pages/ErrorPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  {
    path: '/apartments/:id',
    component: ApartmentPage,
    name: 'apartment',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login-page',
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/register',
    component: RegistrationPage,
    name: 'register-page',
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/my-orders',
    component: MyOrdersPage,
    name: 'my-orders',
    meta: {
      requiresAuth: true,
    },
  },
  { path: '*', component: ErrorPage, name: 'error-page' },
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
