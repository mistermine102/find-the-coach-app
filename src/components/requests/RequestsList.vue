<template>
  <div>
    <request-item v-for="request in requests" :receiverId="request.receiverId" :message="request.message" :key="request.id"></request-item>
  </div>
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
