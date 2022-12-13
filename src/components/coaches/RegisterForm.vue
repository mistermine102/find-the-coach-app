<template>
  <section>
    <base-container>
      <h1 class="form-header">Register as a couch</h1>

      <form class="base-form" @submit.prevent="addNewCoach">
        <div class="form-field">
          <input
            :class="{ inValid: !name.isValid }"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            v-model.trim="name.value"
            autocomplete="off"
          />
          <p v-if="!name.isValid" class="validation-info">Enter your name</p>
        </div>

        <div class="form-field">
          <textarea
            :class="{ inValid: !description.isValid }"
            name="desc"
            id="desc"
            cols="30"
            rows="5"
            placeholder="Description"
            v-model.trim="description.value"
          ></textarea>
          <p v-if="!description.isValid" class="validation-info">
            Describe yourself in a few words
          </p>
        </div>

        <div class="form-field">
          <input
            :class="{ inValid: !rate.isValid }"
            type="number"
            name="rate"
            id="rate"
            placeholder="Hourly rate $"
            v-model.number="rate.value"
          />
          <p v-if="!rate.isValid" class="validation-info">
            Enter your hourly rate
          </p>
        </div>

        <h2>Set your areas of experise</h2>
        <div class="form-field">
          <div class="form-control">
            <input
              type="checkbox"
              name="spec"
              id="frontend"
              value="frontend"
              v-model="specs.value"
            />
            <label for="frontend">Frontend development</label>
          </div>
          <div class="form-control">
            <input
              type="checkbox"
              name="spec"
              id="backend"
              value="backend"
              v-model="specs.value"
            />
            <label for="backend">Backend development</label>
          </div>
          <div class="form-control">
            <input
              type="checkbox"
              name="spec"
              id="career"
              value="career"
              v-model="specs.value"
            />
            <label for="career">Career advisory</label>
          </div>
          <p v-if="!specs.isValid" class="validation-info">
            Choose something you're comfortable with
          </p>
        </div>
        <div class="button-container">
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: {
        value: "",
        isValid: true,
      },
      description: {
        value: "",
        isValid: true,
      },
      rate: {
        value: null,
        isValid: true,
      },
      specs: {
        value: [],
        isValid: true,
      },
    };
  },
  methods: {
    addNewCoach() {
      this.$store.dispatch("coach/addNewCoach", newCoach);

      this.name.isValid = true;
      this.description.isValid = true;
      this.rate.isValid = true;
      this.specs.isValid = true;

      if (!this.name.value) {
        this.name.isValid = false;
        return;
      }
      if (!this.description.value) {
        this.description.isValid = false;
        return;
      }
      if (!this.rate.value) {
        this.rate.isValid = false;
        return;
      }
      if (!this.specs.value.length) {
        this.specs.isValid = false;
        return;
      }

      const newCoach = {
        name: this.name.value,
        description: this.description.value,
        rate: this.rate.value,
        specs: this.specs.value,
      };

      this.$store.dispatch("coach/addNewCoach", newCoach);
      this.$router.push("/coaches");
    },
  },
};
</script>
<style scoped>
label {
  margin-left: 5px;
  font-size: 1rem;
}

h2 {
  font-size: 1rem;
}
</style>
