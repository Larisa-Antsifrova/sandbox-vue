import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './router';
import './assets/scss/index.scss';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
