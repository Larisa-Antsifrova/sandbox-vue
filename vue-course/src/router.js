import VueRouter from 'vue-router';
import One from './pages/One.vue';
import Two from './pages/Two.vue';

const routes = [
  { path: '/one', component: One },
  { path: '/two', component: Two },
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
