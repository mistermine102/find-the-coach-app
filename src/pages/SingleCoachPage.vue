<template>
  <h1>Single Coach</h1>
  {{ singleCoach }}
</template>

<script>
export default {
  computed: {
    singleCoach() {
      return this.$store.getters["coach/singleCoach"];
    },
  },
};
</script>


