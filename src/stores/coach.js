import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      allCoaches: [],
      filters: [],
      coachId: 3,
    };
  },
  getters: {
    allCoaches(state) {
      if (state.filters.length < 1) {
        return state.allCoaches;
      }
    },
    singleCoach(state) {
      const foundCoach = state.allCoaches.find((el) => el.id === state.coachId);
      console.log(foundCoach)
      return foundCoach;
    },
  },
  mutations: {
    fetchCoaches(state, payload) {
      state.allCoaches = payload;
    },
    filterCoaches(state, payload) {
      const filteredCoaches = [];
      for (let coach of state.allCoaches) {
        if (
          payload.every((el) => {
            return coach.badges.includes(el);
          })
        ) {
          filteredCoaches.push(coach);
        }
      }
      state.allCoaches = filteredCoaches;
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
