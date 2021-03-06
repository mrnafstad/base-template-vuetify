import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false
  },
  mutations: {
    login: (state) => state.login = !state.login
  },
  actions: {
    toggleLogin({ commit }) {
      commit('login')
    }
  },
  modules: {},
  getters: {
    login: (state) => state.login
  }
});
