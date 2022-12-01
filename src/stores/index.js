import { createStore } from "vuex";
import CoachModule from "./coach";

const store = createStore({
  modules: {
    coach: CoachModule,
  },
});

export default store;
