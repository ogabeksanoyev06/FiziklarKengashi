<template>
  <div>
    <AppHeader />

    <div></div>

    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "@/components/layouts/default/app-footer/AppFooter";
import AppHeader from "@/components/layouts/default/app-header/AppHeader";

export default {
  name: "Cabinet",
  components: { AppHeader, AppFooter },
  data() {
    return {};
  },
  computed: {},
  methods: {},

  mounted() {},
};
</script>

<style lang="scss" scoped>
.page {
  &__wrap {
    min-height: calc(100vh - 402px);
  }
}
</style>
