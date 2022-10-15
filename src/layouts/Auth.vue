<template>
  <div class="auth">
    <div class="auth__column auth__content">
      <div class="auth__wrap">
        <div class="auth__header w-100">
          <div class="d-flex" :class="isMobile ? 'mb-30' : 'mb-60'">
            <router-link to="/" class="logo d-flex"> </router-link>
          </div>
        </div>
        <RouterView />
        <div class="auth__footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import "../assets/styles/pages/auth.css";

export default {
  name: "Auth",
  components: {},

  methods: {},
  mounted() {},
};
</script>

<style lang="scss"></style>
