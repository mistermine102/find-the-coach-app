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
      console.log(payload)
      context.commit("addRequest", payload)
    },
  },
};
