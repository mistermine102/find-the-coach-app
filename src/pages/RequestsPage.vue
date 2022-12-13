<template>
  <div>
    <section>
      <base-container>
        <requests-list></requests-list>
      </base-container>
    </section>
  </div>
</template>

<script>
import RequestsList from "../components/requests/RequestsList.vue";

export default {
  components: {
    RequestsList,
  },
};
</script>
