<template>
  <div>
    <p class="upper-text">
      <slot name="upper-text"></slot>
    </p>
    <p class="message">
      <slot name="message"></slot>
    </p>
  </div>
</template>

<style scoped>
div {
  padding: 1rem;
  border: 1px solid rgb(206, 206, 206);
  margin: 1rem 0;
}
.message {
  font-size: 1.2rem;
  color: aquamarine;
}

a,
a:visited {
  font-weight: 700;
  color: rgb(0, 0, 0);
}
</style>
