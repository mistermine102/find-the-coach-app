<template>
  <request-item v-for="request in requests" :key="request.id"> 
    {{request}}
  </request-item>
</template>
<script>
import RequestItem from "./RequestItem.vue";

export default {
  components: {
    RequestItem,
  },
  computed: {
    requests() {
      return this.$store.getters["request/requests"];
    },
  },
};
</script>

