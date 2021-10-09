import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';

const routes = [{ path: '/', component: HomePage }];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
