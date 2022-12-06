<template>
  <form @submit.prevent>
    <h1>Register as a couch</h1>
    <div class="form-field">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" />
    </div>

    <div class="form-field">
      <label for="desc">Description:</label>
      <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
    </div>

    <div class="form-field">
      <label for="rate">Hourly rate:</label>
      <input type="number" name="rate" id="rate" />
    </div>
    <div class="form-field">
      <label for="spec">Specifications</label>
      <div class="form-control">
        <input type="checkbox" name="spec" id="frontend" value="frontend" v-model="specs" />
        <label for="frontend">Frontend</label>
      </div>
      <div class="form-control">
        <input type="checkbox" name="spec" id="backend" value="backend" v-model="specs" />
        <label for="backend">Backend</label>
      </div>
      <div class="form-control">
        <input type="checkbox" name="spec" id="career" value="career" v-model="specs" />
        <label for="career">Career</label>
      </div>
    </div>
    <base-button>Submit</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      specs: [],
    };
  },
};
</script>

<style scoped>
form {
  width: 30%;
  margin: auto;
}

form input {
  padding: 0.3rem;
}
.form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1rem;
}
.form-control {
  display: inline-block;
  margin: 0.5rem 1rem;
}

.form-control:first-of-type {
  margin-left: 0;
}

label {
  font-size: 1rem;
}
</style>
