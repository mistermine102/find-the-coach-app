<template>
  <div class="container">
    <h2>{{ coach.name }}</h2>
    <p>${{ coach.rate }}/hour</p>
    <base-badge v-for="(badge, index) in coach.badges" :key="index" :mode="badge"></base-badge>
    <div class="buttons-container">
      <base-button>Contact</base-button>
      <base-button @click="viewDetails">View Details</base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["coach"],
  methods: {
    viewDetails() {
      this.$router.push(`/coaches/${this.coach.id}`);
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 0.5rem;
}

button {
  margin: 0 0.5rem;
}

.buttons-container {
  display: flex;
  justify-content: end;
}
.container {
  border: 1px solid rgb(117, 117, 117);
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
}
</style>
