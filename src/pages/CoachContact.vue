<template>
  <div>
    <section>
      <form @submit.prevent="submitForm" class="base-form">
        <div class="form-field">
          <textarea cols="30" rows="10" v-model.trim="message.value" placeholder="Leave a message"></textarea>
          <p v-if="!message.isValid" class="validation-info">Why would you sent an empty message?</p>
        </div>
        <div class="button-container">
          <base-button>Send a message</base-button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        value: "",
        isValid: true,
      },
    };
  },
  methods: {
    submitForm() {
      this.message.isValid = true;

      if (!this.message.value) {
        this.message.isValid = false;
        return;
      }

      this.$store.dispatch("request/addRequest", {
        message: this.message.value,
        receiver: this.$route.params.id,
      });
      this.$router.push("/requests");
    },
  },
};
</script>

<style>
.base-form {
  width: 100%;
}
</style>
