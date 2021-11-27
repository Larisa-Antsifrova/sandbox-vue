import { loginUser, registerUser } from '../../services/auth-service';

const initialState = {
  user: null,
  token: '',
};

export default {
  namespaced: true,
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
};
