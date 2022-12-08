<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700&display=swap" rel="stylesheet" />
  <the-navbar></the-navbar>
  <router-view></router-view>
</template>

<script>
import TheNavbar from "./components/layout/TheNavbar.vue";

export default {
  name: "app",
  components: {
    TheNavbar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Open Sans";
}
a {
  text-decoration: none;
}

section {
  width: 60%;
  margin: 2rem auto;
}

.base-form {
  width: 30%;
  margin: auto;
}

.base-form input,
.base-form textarea {
  padding: 0.5rem;
  border: 1px solid rgb(175, 175, 175);
  font-size: 1rem;
  border-radius: 0.25rem;
  resize: none;
  outline: none;
}

.base-form .button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.base-form .validation-info {
  color: rgb(255, 70, 70);
}
.base-form .inValid {
  border: 2px solid rgb(255, 170, 170);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:focus-visible,
textarea:focus-visible {
  background: rgba(0, 0, 0, 0.025);
}

.base-form .form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1rem;
  margin-left: 0.5rem;
}
.base-form .form-control {
  display: inline-block;
  margin: 0.5rem 0;
}

.base-form .form-control:last-of-type {
  margin-bottom: 0;
}

.base-form .validation-info {
  margin: 0;
}

.form-header {
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem;
  text-align: center;
}

</style>
