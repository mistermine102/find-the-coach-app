import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      allCoaches: [],
      filters: [],
    };
  },
  getters: {
    allCoaches(state) {
      return state.allCoaches;
    },
  },
  mutations: {
    fetchCoaches(state, payload) {
      state.allCoaches = payload;
    },
    filterCoaches(state, payload) {
      for (let coach of state.allCoaches) {
        if (
          payload.every((el) => {
            return coach.badges.includes(el);
          })
        ) {
          console.log(coach.name);
        }
      }
    },
  },
  actions: {
    async fetchCoaches(context) {
      const { data } = await axios({
        url: "http://127.0.0.1:3000",
      });

      context.commit("fetchCoaches", data);
    },
    filterCoaches(context, payload) {
      context.commit("filterCoaches", payload);
    },
  },
};
