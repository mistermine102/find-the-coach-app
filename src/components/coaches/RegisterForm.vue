<template>
  <section>
    <base-container>
      <h1>Register as a couch</h1>

      <form @submit.prevent="addNewCoach">
        <div class="form-field">
          <input :class="{ inValid: !name.isValid }" type="text" name="name" id="name" placeholder="Name" v-model.trim="name.value" autocomplete="off" />
          <p v-if="!name.isValid" class="validation-info">Enter your name</p>
        </div>

        <div class="form-field">
          <textarea :class="{ inValid: !description.isValid }" name="desc" id="desc" cols="30" rows="5" placeholder="Description" v-model.trim="description.value"></textarea>
          <p v-if="!description.isValid" class="validation-info">Describe yourself in a few words</p>
        </div>

        <div class="form-field">
          <input :class="{ inValid: !rate.isValid }" type="number" name="rate" id="rate" placeholder="Hourly rate $" v-model.number="rate.value" />
          <p v-if="!rate.isValid" class="validation-info">Enter your hourly rate</p>
        </div>

        <h2>Set your areas of experise</h2>
        <div class="form-field">
          <div class="form-control">
            <input type="checkbox" name="spec" id="frontend" value="frontend" v-model="specs.value" />
            <label for="frontend">Frontend development</label>
          </div>
          <div class="form-control">
            <input type="checkbox" name="spec" id="backend" value="backend" v-model="specs.value" />
            <label for="backend">Backend development</label>
          </div>
          <div class="form-control">
            <input type="checkbox" name="spec" id="career" value="career" v-model="specs.value" />
            <label for="career">Career advisory</label>
          </div>
          <p v-if="!specs.isValid" class="validation-info">Choose something you're comfortable with</p>
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
.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.validation-info {
  color: rgb(255, 70, 70);
}
.inValid {
  border: 2px solid rgb(255, 170, 170);
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

.form-control:last-of-type {
  margin-bottom: 0;
}

p {
  margin: 0;
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
