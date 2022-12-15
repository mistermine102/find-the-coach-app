<template>
  <div>
    <section>
      <nav>
        <div class="button-container">
          <base-button @click="switchRoute(receivedLink)">Received</base-button>
          <base-button @click="switchRoute(sentLink)">Sent</base-button>
        </div>
      </nav>
      <base-container>
        <requests-list></requests-list>
      </base-container>
    </section>
  </div>
</template>

<script>
import RequestsList from "../components/requests/RequestsList.vue";

export default {
  components: {
    RequestsList,
  },
  computed: {
    receivedLink() {
      return "/requests/received";
    },
    sentLink() {
      return "/requests/sent";
    },
  },
  methods: {
    switchRoute(url) {
      this.$router.push(url);
    },
  },
};
</script>
