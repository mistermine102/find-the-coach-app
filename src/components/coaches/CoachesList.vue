<template>
  <base-container>
    <div class="controls">
      <base-button mode="alt">Refresh</base-button>
      <base-button v-if="!currentUser" @click="$router.push('/register')">Register as a couch</base-button>
    </div>

    <h2 v-if="allCoaches.length <= 0">No coaches found</h2>

    <single-coach v-for="coach in allCoaches" :key="coach.id" :coach="coach"></single-coach>
  </base-container>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
import SingleCoach from "./SingleCoach.vue";

export default {
  components: {
    SingleCoach,
    BaseButton,
  },
  computed: {
    allCoaches() {
      return this.$store.getters["coach/allCoaches"];
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  beforeMount() {
    this.$store.dispatch("coach/fetchCoaches")
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
