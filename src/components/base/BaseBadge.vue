<template>
  <div :class="mode">
    <span>{{ mode }}</span>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
div {
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  color: white;
  display: inline-block;
  margin: 0.5rem;
}

div:first-of-type {
    margin-left: 0;
}

.frontend {
  background-color: rgb(108, 17, 9);
}

.backend {
  background-color: rgb(11, 14, 78);
}

.career {
  background-color: rgb(69, 9, 89);
}
</style>
