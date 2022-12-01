<template>
  <section>
    <coaches-filter></coaches-filter>
    <coaches-list></coaches-list>
  </section>
</template>

<script>
import CoachesFilter from "../components/coaches/CoachesFilter.vue";
import CoachesList from "../components/coaches/CoachesList.vue";

export default {
  components: {
    CoachesFilter,
    CoachesList,
  },
};
</script>
