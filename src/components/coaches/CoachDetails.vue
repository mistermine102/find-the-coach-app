<template>
  <section>
    <base-container v-if="allCoaches === null">
      <div class="button-container"><base-spinner></base-spinner></div>
    </base-container>

    <base-container v-else-if="allCoaches === false">
      <div class="button-container">
        <base-error>Error</base-error>
      </div>
    </base-container>
    <base-container v-else-if="!foundCoach">
      <p>Sorry can't find coach with id of {{ coachId }}</p>
    </base-container>

    <base-container v-else>
      <h2>{{ foundCoach.name }}</h2>
      <div class="badges">
        <base-badge v-for="badge in foundCoach.badges" :mode="badge" :key="badge"></base-badge>
      </div>
      <p>{{ foundCoach.description }}</p>
      <h3>
        <span>{{ foundCoach.rate }}$</span>/hour
      </h3>

      <div class="controls">
        <base-button @click="toggleContact">Contact</base-button>
      </div>
      <router-view></router-view>
    </base-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      foundCoach: null,
      contactVisible: false,
    };
  },
  computed: {
    allCoaches() {
      return this.$store.getters["coach/allCoaches"];
    },
    coachId() {
      return this.$route.params.id;
    },
    contactLink() {
      if (this.contactVisible) {
        return `/coaches/${this.foundCoach.id}/contact`;
      } else {
        return `/coaches/${this.foundCoach.id}`;
      }
    },
  },
  methods: {
    toggleContact() {
      this.contactVisible = !this.contactVisible;
      this.$router.push(this.contactLink);
    },
  },
  async created() {
    try {
      await this.$store.dispatch("coach/fetchCoaches");
      this.foundCoach = this.allCoaches.find((el) => el.id === this.coachId);
      if (this.$route.path.includes("contact")) {
        this.contactVisible = true;
      }
    } catch (error) {}
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
