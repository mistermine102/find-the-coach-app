<template>
  <base-container>
    <div class="controls">
      <base-button mode="alt" @click="fetchCoaches">Refresh</base-button>
      <base-button v-if="!currentUser" @click="$router.push('/register')">Register as a couch</base-button>
    </div>

    <div class="button-container">
      <base-spinner v-if="allCoaches === null"></base-spinner>
      <base-error v-else-if="allCoaches === false">Something went wrong</base-error>
      <h2 v-else-if="allCoaches.length <= 0">No coaches found</h2>
    </div>

    <single-coach v-for="coach in allCoaches" :key="coach.id" :coach="coach"></single-coach>
  </base-container>
</template>

<script>
import SingleCoach from "./SingleCoach.vue";

export default {
  components: {
    SingleCoach,
  },
  computed: {
    allCoaches() {
      return this.$store.getters["coach/allCoaches"];
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    fetchCoaches() {
      this.$store.dispatch("coach/fetchCoaches");
    },
  },
  beforeMount() {
    this.fetchCoaches();
    this.$store.dispatch("coach/resetFilters");
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
}

.controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}
</style>
