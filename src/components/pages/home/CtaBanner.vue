<template>
  <kinesis-container>
    <div class="cta__banner">
      <div
        :style="{ order: orderOne }"
        class="cta__banner-content"
        :class="isDesktopSmall ? 'pa-30' : 'pa-60'"
      >
        <AppText
          :size="isMobile ? 26 : 36"
          :line-height="isMobile ? 30 : 40"
          maxWidth="600"
          weight="600"
          class="mb-20 text-color-default"
        >
          {{ title }}
        </AppText>
        <AppText class="mb-60" size="16" line-height="24" maxWidth="570">
          {{ content }}
        </AppText>
        <button class="a_btn">{{ buttonText }}</button>
      </div>
      <div class="cta__banner-photo" :style="{ order: orderTwo }">
        <img :src="photo" class="cta__banner-banner" alt="" />
        <div class="cta__banner-professor" :strength="8">
          <kinesis-element class="layer">
            <img src="/images/cta-banner/bgBlue.png" alt="" />
          </kinesis-element>
        </div>
        <div class="cta__banner-science">
          <kinesis-element class="layer" :strength="10">
            <img src="/images/cta-banner/bgLightBlue.png" alt="" />
          </kinesis-element>
        </div>
        <div class="cta__banner-test">
          <kinesis-element class="layer" :strength="12">
            <img src="/images/cta-banner/bgOrange.png" alt="" />
          </kinesis-element>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  name: "CtaBanner",
  components: {
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
  },
  props: {
    title: String,
    content: String,
    photo: String,
    link: String,
    buttonText: String,
    orderOne: Number,
    orderTwo: Number,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/abstracts/variables";
.cta__banner {
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 60px 0;
  overflow: hidden;

  &-photo {
    display: flex;
    justify-content: center;
    padding: 20px 20px 0;
    max-width: 50%;
    width: 100%;
    height: 400px;
    width: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-banner {
    position: relative;
    z-index: 3;
    max-width: 400px;
  }
  &-professor {
    position: absolute;
    z-index: 2;
    top: -10%;
    right: 0%;
    max-width: 350px;
  }
  &-science {
    position: absolute;
    z-index: 2;
    top: 15%;
    left: 0%;
    max-width: 300px;
  }

  &-test {
    position: absolute;
    z-index: 4;
    bottom: -50px;
    left: 50px;
    max-width: 200px;
  }

  &-content {
    max-width: 50%;
    width: 100%;
  }
}

@media (max-width: 991px) {
  .cta__banner-photo {
    max-width: 40%;
  }
  .cta__banner-content {
    max-width: 60%;
  }
}

@media (max-width: 650px) {
  .cta__banner {
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 30px 0;
    &-banner {
      height: 300px !important;
    }
    &-photo {
      max-width: 100%;
      height: 350px;
      order: 1;
    }
    &-professor {
      max-width: 200px;
      right: 0px;
    }
    &-science {
      max-width: 200px;
      top: 0px;
    }
    &-test {
      bottom: -10px;
      left: -60px;
      max-width: 150px;
    }
    &-content {
      max-width: 100%;
      padding: 20px;
      order: 2;
      margin-top: 30px;
    }
  }
}
</style>
