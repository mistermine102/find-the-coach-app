import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      allCoaches: [
        { id: "1", name: "Maximillian Schwarzmuller", badges: ["frontend", "backend", "career"], rate: 40 },
        { id: "2", name: "Vilhelm Kyōko", badges: ["career", "backend"], rate: 26 },
        { id: "3", name: "Dominique Jena", badges: ["frontend"], rate: 20 },
        { id: "4", name: "Eros Tyra", badges: ["backend"], rate: 18 },
        { id: "5", name: "Luiz Mahir", badges: ["frontend", "career"], rate: 30 },
      ],
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
  },
  actions: {
    filterCoaches(context, payload) {
      context.commit("filterCoaches", payload);
    },
    addNewCoach(context, payload) {
      const newCoach = {
        id: new Date().toISOString(),
        name: payload.name,
        description: payload.description,
        rate: payload.rate,
        badges: payload.specs,
      };

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
      try {
        const data = await axios.get("http://localhost:3000")
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  },
};
