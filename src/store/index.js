import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: false
  },
  getters: {
    modal: (state) => state.modal,
  },
  mutations: {
    CHANGE_MODAL: (state) => {
      state.modal = !state.modal;
    },
  },
  actions: {},
  modules: {}
});
