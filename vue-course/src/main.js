import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Notifications from 'vue-notification';

import App from './App.vue';
import router from './router';
import './assets/scss/index.scss';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Notifications);

const store = new Vuex.Store({
  state: {
    userName: '',
  },
  mutations: {
    changeName(state, newName) {
      state.userName = newName;
    },
  },
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
