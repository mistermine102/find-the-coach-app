<template>
  <base-container>
    <div class="controls">
      <base-button mode="alt">Refresh</base-button>
      <base-button @click="$router.push('/register')">Register as a couch</base-button>
    </div>

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
  },
};
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}
</style>
