<template>
  <div>
    <section>
      <nav>
        <div class="button-container">
          <base-button>Received</base-button>
          <base-button>Sent</base-button>
        </div>
      </nav>
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
