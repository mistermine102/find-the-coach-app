import { createStore } from "vuex";
import CoachModule from "./coach";
import RequestModule from "./request";

const store = createStore({
  modules: {
    coach: CoachModule,
    request: RequestModule,
  },
  state() {
    return {
      currentUser: null,
    };
  },
  getters: {
    currentUser(state) {
      if (state.currentUser) {
        return state.currentUser;
      } else {
        return false;
      }
    },
  },
  mutations: {},
  actions: {},
});

export default store;
