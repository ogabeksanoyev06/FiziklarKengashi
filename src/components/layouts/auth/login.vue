<template>
  <div class="auth__body auth__form"></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "login",
  components: {},
  data() {
    return {
      request: {
        login: "",
        password: "",
      },
      errorMes: "",
      authError: "",
      showPassword: false,
    };
  },
  computed: {
    ...mapGetters([""]),
  },
  methods: {
    ...mapActions([""]),
  },
  mounted() {},
};
</script>

<style scoped></style>
