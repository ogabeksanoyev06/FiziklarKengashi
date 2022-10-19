<template>
  <div>
    <AppHeader />
    <div class="page__wrap">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import AppFooter from "../components/layouts/default/app-footer/AppFooter";
import AppHeader from "../components/layouts/default/app-header/AppHeader";

export default {
  name: "MainLayout",
  components: { AppHeader, AppFooter },
  methods: {
    ...mapMutations(["setWindowWidth"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
  },

  mounted() {
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
};
</script>

<style lang="scss" scoped>
.page {
  &__wrap {
    min-height: calc(100vh - 402px);
  }
}
</style>

<style></style>
