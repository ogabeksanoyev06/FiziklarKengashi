<template>
  <div class="home-page">
    <HeroBanner />
    <section class="container mt-20">
      <CtaBanner
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industr"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        buttonText="Batafsil"
        photo="/images/cta-banner/bannerOne.png"
      />
    </section>
    <section class="container mt-20">
      <CtaBanner
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industr"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        buttonText="Batafsil"
        photo="/images/cta-banner/bannerTwo.png"
        orderOne="2"
        orderTwo="1"
      />
    </section>
    <section class="container">
      <news />
    </section>
  </div>
</template>

<script>
import HeroBanner from "@/components/pages/home/HeroBanner.vue";
import CtaBanner from "@/components/pages/home/CtaBanner.vue";
import News from "@/components/pages/home/News.vue";
import { mapMutations } from "vuex";
export default {
  name: "app-home",
  components: { HeroBanner, CtaBanner, News },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setWindowWidth"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
  },
  mounted() {
    window.addEventListener("resize", this.setWidth);
    this.setWidth();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
};
</script>

<style scoped></style>
