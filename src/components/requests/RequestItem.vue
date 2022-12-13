<template>
  <div>
    <p>
      From you to <router-link :to="`/coaches/${receiverId}`">{{ coach }}</router-link>
    </p>
    <p class="description">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ["message", "receiverId"],
  computed: {
    coach() {
      const coaches = this.$store.getters["coach/allCoaches"];
      const coach = coaches.find((el) => el.id === this.receiverId);
      if (coach) {
        return coach.name;
      } else {
        return "Sorry, can't find that coach";
      }
    },
  },
};
</script>

<style scoped>
div {
  padding: 1rem;
  border: 1px solid rgb(206, 206, 206);
  margin: 1rem 0;
}
.description {
  font-size: 1.2rem;
}

a,
a:visited {
  font-weight: 700;
  color: rgb(0, 0, 0);
}

</style>
