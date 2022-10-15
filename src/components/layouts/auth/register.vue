<template>
  <div class="auth__body auth__form"></div>
</template>

<script>
export default {
  name: "register",
  components: {},
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        telefon: null,
        login: "",
        password: "",
        passwordConfirmation: "",
      },
    };
  },
  methods: {},
};
</script>

<style scoped></style>
