import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser, registerUser } from '../services/auth-service';

Vue.use(Vuex);

const initialState = {
  user: null,
  token: '',
};

const store = new Vuex.Store({
  state: {
    ...initialState,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await loginUser(payload);
      const { user, token } = data;

      commit('setUser', user);
      commit('setToken', token);
    },
    async registration({ commit }, payload) {
      const { data } = await registerUser(payload);
      const { user, token } = data;

      commit('setUser', user);
      commit('setToken', token);
    },
  },
});

export default store;
