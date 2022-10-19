<template>
  <div class="app-card">
    <div class="app-card__photo">
      <img src="/images/cta-banner/bannerOne.png" :alt="title" />
    </div>
    <div class="app-card__content">
      <div class="app-card__link" @click="goToLink">
        <img src="/icons/redirect.svg" alt="" />
      </div>

      <app-text
        :size="isMobile ? 16 : 18"
        class="app-card__title mb-10"
        max-lines="2"
        line-height="24"
        weight="600"
        tag="h3"
      >
        {{ title }}
      </app-text>
      <app-text class="" size="14" line-height="20" weight="400" max-lines="4">
        {{ subtitle }}
      </app-text>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/components/app-news-card.css";
export default {
  name: "AppNewsCard",
  components: {},
  data() {
    return {};
  },
  props: {
    id: Number,
    link: String,
    title: String,
    subtitle: String,
    photo: String,
    medium: Boolean,
    value: null,
    price: {
      type: [String, Number],
      default: "",
    },
  },
  methods: {
    goToLink() {
      this.$router.push({
        name: "detailed-page",
        params: { news_id: this.id },
      });
    },
  },
};
</script>

<style scoped>
.app-card {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
}
@media (max-width: 549px) {
  .app-card {
    max-width: 100%;
  }
}
</style>
