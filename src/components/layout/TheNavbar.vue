<template>
  <header>
    <h1><router-link to="/">Find a Coach</router-link></h1>
    <ul>
      <li><router-link to="/coaches">All coaches</router-link></li>
      <li><router-link to="/requests">Requests</router-link></li>
    </ul>
  </header>
</template>

<style scoped>
header {
  background-color: rgb(68, 61, 173);
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
}

h1 > a,
h1 > a:hover {
  color: white;
  border: none;
}

a {
  color: rgb(161, 158, 214);
  margin: 0 1rem;
  padding: 0.5rem;
  border-bottom: 2px solid transparent;
}

a:hover {
  color: white;
  border-bottom: 2px solid white;
}
.router-link-active {
  color: white;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
}
</style>
