import {
  loginUser,
  registerUser,
  logoutUser,
} from '../../services/auth-service';

const initialState = {
  user: null,
  token: '',
};

export default {
  namespaced: true,
  state: {
    ...initialState,
  },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token);
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearUserData(state) {
      Object.assign(state, { ...initialState });
    },
  },
  actions: {
    async loginUser({ commit }, payload) {
      const { data } = await loginUser(payload);
      const { user, token } = data;

      commit('setUser', user);
      commit('setToken', token);
    },
    async registerUser({ commit }, payload) {
      const { data } = await registerUser(payload);
      const { user, token } = data;

      commit('setUser', user);
      commit('setToken', token);
    },
  },
  async logoutUser({ commit }) {
    await logoutUser();

    commit('clearUserData');
  },
};
