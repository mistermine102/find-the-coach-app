import { createStore } from "vuex";
import CoachModule from "./coach";
import RequestModule from "./request";

const store = createStore({
  modules: {
    coach: CoachModule,
    request: RequestModule,
  },
});

export default store;
