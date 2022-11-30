<template>
  <header>
    <h1>Find a Coach</h1>
    <ul>
      <li><router-link>All coaches</router-link></li>
      <li><router-link>Requests</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>

header {
    background-color: rgb(68, 61, 173);
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
}

h1 {
    color: white;
}  

li {
    color: rgb(161, 158, 214);
    margin: 0 1rem;
    padding: 0.5rem;
    border-bottom: 2px solid transparent ;
}

li:hover {
    color: white;
    border-bottom: 2px solid white;
}

ul {
    list-style: none;
    display: flex;
    align-items: center;
}

</style>

