export default {
  namespaced: true,
  state() {
    return {
      requests: [
        {
          id: "1",
          message: "First request",
          receiverId: "1",
        },
        {
          id: "2",
          message: "Hello world",
          receiverId: "4"
        }
      ],
    };
  },
  getters: {
    requests(state) {
      return state.requests;
    },
  },
  mutations: {
    addRequest(state, payload) {
      const newRequest = {
        id: new Date().toISOString(),
        message: payload.message,
        receiverId: payload.receiver,
      };

      state.requests.push(newRequest);
    },
  },
  actions: {
    addRequest(context, payload) {
      context.commit("addRequest", payload);
    },
  },
};
