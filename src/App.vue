
<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700&display=swap"
    rel="stylesheet"
  />

  <the-navbar></the-navbar>
  <router-view></router-view>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";

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
</style>


