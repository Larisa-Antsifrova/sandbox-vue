import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './modules/auth';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const persistedstate = createPersistedState({
  paths: ['auth.token'],
});

const store = new Vuex.Store({
  modules: {
    auth: authModule,
  },
  plugins: [persistedstate],
});

export default store;
