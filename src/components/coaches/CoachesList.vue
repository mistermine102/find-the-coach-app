<template>
  <base-container>
    <base-button @click="fetchCoaches" mode="alt">Refresh</base-button>
    <single-coach v-for="coach in allCoaches" :key="coach.id" :coach="coach"></single-coach>
  </base-container>
</template>

<script>
import SingleCoach from "./SingleCoach.vue";

export default {
  components: {
    SingleCoach,
  },
  methods: {
    fetchCoaches() {
      this.$store.dispatch("coach/fetchCoaches");
    },
  },
  computed: {
    allCoaches() {
      return this.$store.getters["coach/allCoaches"];
    },
  },
  created() {
    this.fetchCoaches();
  },
};
</script>

<style scoped>
button {
  margin-bottom: 1rem;
}
</style>
