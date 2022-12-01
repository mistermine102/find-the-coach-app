<template>
  <base-container>
    <div class="container">
      <h2>Find your coach</h2>
      <form>
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
      </form>
    </div>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      specs: [],
    };
  },
  methods: {
    filterCoaches() {
      this.$store.dispatch("coach/filterCoaches", this.specs);
    },
  },
  watch: {
    specs() {
      this.filterCoaches();
    },
  },
};
</script>

<style scoped>
.form-control {
  display: inline-block;
  margin: 0.5rem 1rem;
  margin-bottom: 0;
}

.form-control:first-of-type {
  margin-left: 0;
}

input {
  margin-right: 0.5rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
