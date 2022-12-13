<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  padding: 1rem;
  border: 1px solid rgb(206, 206, 206);
  margin: 1rem 0;
}
.description {
  font-size: 1.2rem;
  color: aquamarine;
}

a,
a:visited {
  font-weight: 700;
  color: rgb(0, 0, 0);
}
</style>
