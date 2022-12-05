<template>
  <h1>Coach Details</h1>
  {{ allCoaches }}
</template>

<script>
export default {
  data() {
    return {
      foundCoach: null,
    };
  },
  computed: {
    allCoaches() {
      return this.$store.getters["coach/allCoaches"];
    },
    coachId() {
      return this.$route.params.id;
    },
  },
  methods: {
    fetchCoaches() {
      this.$store.dispatch("coach/fetchCoaches");
    },
  },
  created() {
    this.fetchCoaches();
    console.log(this.coachId);
    console.log(this.allCoaches);
  },
};
</script>
