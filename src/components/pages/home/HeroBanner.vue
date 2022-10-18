<template>
  <div class="hero-banner">
    <div class="hero-banner__inner">
      <div class="container hero-banner__content">
        <div>
          <AppText
            :size="isMobile ? 22 : 36"
            :line-height="isMobile ? 26 : 36"
            weight="600"
            maxWidth="930"
            class="text-center color-text mb-20"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industr
          </AppText>
          <AppText
            size="16"
            :line-height="isMobile ? 22 : 35"
            weight="400"
            maxWidth="915"
            class="text-center color-text mb-60"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </AppText>
        </div>
        <button class="a_btn"><span>Batafsil</span></button>
      </div>
    </div>
    <div class="hero-banner__footer">
      <div class="container">
        <div class="banner__items">
          <div class="banner__items-item">
            <div class="banner__item-num">500</div>
            <div class="banner__item-text">
              Malakali ishlab chiqarish ta’lim ustalari
            </div>
          </div>
          <div class="banner__items-item">
            <div class="banner__item-num">500</div>
            <div class="banner__item-text">
              Malakali ishlab chiqarish ta’lim ustalari
            </div>
          </div>
          <div class="banner__items-item">
            <div class="banner__item-num">500</div>
            <div class="banner__item-text">
              Malakali ishlab chiqarish ta’lim ustalari
            </div>
          </div>
          <div class="banner__items-item">
            <div class="banner__item-num">500</div>
            <div class="banner__item-text">
              Malakali ishlab chiqarish ta’lim ustalari
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroBanner",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/abstracts/variables";
.hero-banner {
  position: relative;
  width: 100%;
  background: linear-gradient(
      179.92deg,
      #0a6288 0.07%,
      rgba(0, 0, 0, 0.19) 99.93%
    ),
    url("@/assets/heroBanner.png");
  background-position: top right;
  background-size: cover;
  background-repeat: no-repeat;
}
.hero-banner__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 130px);
  width: 100%;
}
.hero-banner__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  flex: 1;
}
.hero-banner__footer {
  width: 100%;
  min-height: 180px;
  padding: 30px;
  background-color: #0a6288;
}
.banner__items {
  display: flex;
  justify-content: space-between;
}
.banner__items-text {
  max-width: 220px;
  width: 100%;
}
.banner__item-num {
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  margin-bottom: 8px;
}
.banner__item-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  max-width: 190px;
  width: 100%;
}
@media (max-width: 800px) {
  .banner__items {
    flex-wrap: wrap;
    justify-content: center;
  }
  .banner__items-item {
    margin-bottom: 20px;
  }
}
@media (max-width: 576px) {
  .banner__item-num {
    font-size: 30px;
    line-height: 32px;
  }
  .banner__item-text {
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
