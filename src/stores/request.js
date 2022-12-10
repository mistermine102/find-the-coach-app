export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  //getters: {},
  //methods: {},
  actions: {
    addRequest(context, payload) {
      console.log()
      context.commit("addRequest", payload)
    },
  },
};
