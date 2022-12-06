<template>
  <section>
    <base-container>
      <h2>{{ foundCoach.name }}</h2>
      <div class="badges">
        <base-badge v-for="badge in foundCoach.badges" :mode="badge" :key="badge"></base-badge>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores atque illum deleniti quibusdam, adipisci placeat non numquam quisquam recusandae laudantium repudiandae quam nemo accusamus perspiciatis architecto iste dolores excepturi.</p>
      <h3>
        <span>{{ foundCoach.rate }}$</span>/hour
      </h3>

      <div class="controls">
        <base-button>Contact</base-button>
      </div>
    </base-container>
  </section>
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
  created() {
    this.foundCoach = this.allCoaches.find((el) => el.id === this.coachId);
  },
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 5px;
  border-bottom: 2px solid rgb(136, 136, 136);
  padding: 1rem;
  width: 80%;
  margin: auto;
  margin-bottom: 2rem;
}

.badges {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}

.controls {
  display: flex;
  justify-content: center;
}

p {
  width: 75%;
  margin: auto;
  text-align: center;
  color: rgb(71, 71, 71);
  font-weight: 500;
  margin-bottom: 1rem;
}

h3 {
  font-weight: 500;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

span {
  color: green;
  font-weight: 900;
}
</style>
