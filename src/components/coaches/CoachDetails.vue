<template>
  <h1>Coach Details</h1>
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
    findCoach() {
      this.foundCoach = this.allCoaches.find()
    }
  },
  created() {
    this.foundCoach = this.allCoaches.find(el => el.id === this.coachId)

    console.log(this.foundCoach)

  },
};
</script>
