import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ApartmentPage from './pages/ApartmentPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/apartment', component: ApartmentPage, name: 'apartment' },
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
