<template>
  <div>
    <h1>Requests List</h1>
    <router-view></router-view>
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
};
</script>
