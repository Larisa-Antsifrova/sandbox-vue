import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ApartmentPage from './pages/ApartmentPage.vue';
import RegistrationPage from './pages/RegistrationPage.vue';
import MyOrdersPage from './pages/MyOrdersPage.vue';
import LoginPage from './pages/LoginPage.vue';
import ErrorPage from './pages/ErrorPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/apartments/:id', component: ApartmentPage, name: 'apartment' },
  { path: '/login', component: LoginPage, name: 'login-page' },
  { path: '/register', component: RegistrationPage, name: 'register-page' },
  { path: '/my-orders', component: MyOrdersPage, name: 'orders-page' },
  { path: '*', component: ErrorPage, name: 'error-page' },
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
