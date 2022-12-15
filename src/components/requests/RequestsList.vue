<template>
  <div>
    <requests-received></requests-received>
  </div>
</template>
<script>
import RequestsSent from "./RequestsSent.vue";
import RequestsReceived from "./RequestsReceived.vue";

export default {
  components: {
    RequestsReceived,
    RequestsSent,
  },
  created() {
    this.$store.dispatch("request/fetchRequests")
  }
};
</script>
