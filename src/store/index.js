import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowWidth: null,
  },
  getters: {
    windowWidth: (state) => state.windowWidth,
  },
  mutations: {
    setWindowWidth(state, newWidth) {
      state.windowWidth = newWidth;
    },
  },
  actions: {},
  modules: {},
});
