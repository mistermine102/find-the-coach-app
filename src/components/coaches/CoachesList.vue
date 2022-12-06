<template>
  <base-container>
    <base-button mode="alt">Refresh</base-button>
    <single-coach
      v-for="coach in allCoaches"
      :key="coach.id"
      :coach="coach"
    ></single-coach>
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
  },
};
</script>

<style scoped>
button {
  margin-bottom: 1rem;
}
</style>
