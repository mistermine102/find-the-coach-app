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
      if (state.filters.length < 1) {
        return state.allCoaches;
      }
      const validCoaches = [];
      for (let coach of state.allCoaches) {
        let isValid = true;
        for (let filter of state.filters) {
          if (!coach.badges.includes(filter)) {
            isValid = false;
          }
        }
        if (isValid) {
          validCoaches.push(coach);
        }
      }
      return validCoaches;
    },
  },
  mutations: {
    filterCoaches(state, payload) {
      state.filters = payload;
    },
    addNewCoach(state, payload) {
      state.allCoaches.push(payload);
    },
    deleteCoach(state, payload) {
      state.allCoaches = state.allCoaches.filter((el) => el.id !== payload);
    },
    resetFilters(state) {
      state.filters = [];
    },
    fetchCoaches(state, payload) {
      state.allCoaches = payload;
    },
  },
  actions: {
    filterCoaches(context, payload) {
      context.commit("filterCoaches", payload);
    },
    async addNewCoach(context, payload) {
      const newCoach = {
        id: new Date().toISOString(),
        name: payload.name,
        description: payload.description,
        rate: payload.rate,
        badges: payload.specs,
      };

      const body = JSON.stringify(newCoach);

      const { data } = await axios({
        method: "post",
        url: "http://localhost:3000",
        headers: {
          "Content-Type": "Application/JSON",
        },
        data: body,
      });

      context.rootState.currentUser = newCoach.id;

      context.commit("addNewCoach", newCoach);
    },
    deleteCoach(context, payload) {
      context.commit("deleteCoach", payload);
    },
    resetFilters(context) {
      context.commit("resetFilters");
    },
    async fetchCoaches(context) {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000",
      });

      context.commit("fetchCoaches", data);
    },
  },
};
