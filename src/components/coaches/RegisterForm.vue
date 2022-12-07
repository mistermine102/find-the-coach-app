<template>
  <section>
    <base-container>
      <h1>Register as a couch</h1>

      <form @submit.prevent="addNewCoach">
        <div class="form-field">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            v-model="name"
          />
        </div>

        <div class="form-field">
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="5"
            placeholder="Description"
            v-model="description"
          ></textarea>
        </div>

        <div class="form-field">
          <input
            type="number"
            name="rate"
            id="rate"
            placeholder="Hourly rate $"
            v-model="rate"
          />
        </div>

        <h2>Set your areas of experise</h2>
        <div class="form-field">
          <div class="form-control">
            <input
              type="checkbox"
              name="spec"
              id="frontend"
              value="frontend"
              v-model="specs"
            />
            <label for="frontend">Frontend development</label>
          </div>
          <div class="form-control">
            <input
              type="checkbox"
              name="spec"
              id="backend"
              value="backend"
              v-model="specs"
            />
            <label for="backend">Backend development</label>
          </div>
          <div class="form-control">
            <input
              type="checkbox"
              name="spec"
              id="career"
              value="career"
              v-model="specs"
            />
            <label for="career">Career advisory</label>
          </div>
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
      name: "",
      description: "",
      rate: null,
      specs: [],
    };
  },
  methods: {
    addNewCoach() {
      if (
        this.name ||
        this.description ||
        this.rate ||
        this.specs.length === 0
      ) {
        const newCoach = {
          name: this.name,
          description: this.description,
          rate: this.rate,
          specs: this.specs,
        };
      } else {
        alert("NIe");
      }
      this.$store.dispatch("coach/addNewCoach", newCoach);

      this.$router.push("/coaches");
    },
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

form {
  width: 30%;
  margin: auto;
}

form input,
form textarea {
  padding: 0.5rem;
  border: 1px solid rgb(175, 175, 175);
  font-size: 1rem;
  border-radius: 0.25rem;
  resize: none;
  outline: none;
}

input:focus-visible,
textarea:focus-visible {
  background: rgba(0, 0, 0, 0.025);
}

.form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1rem;
  margin-left: 0.5rem;
}
.form-control {
  display: inline-block;
  margin: 0.5rem 0;
}

label {
  margin-left: 5px;
  font-size: 1rem;
}

h1 {
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem;
  text-align: center;
}

h2 {
  font-size: 1rem;
}
</style>
