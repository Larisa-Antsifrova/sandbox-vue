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
};
