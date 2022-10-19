<template>
  <div class="app-slider">
    <div class="splide" ref="slider">
      <div class="splide__slider">
        <div class="splide__track">
          <div class="splide__list">
            <div v-for="(item, idx) in list" :key="idx" class="splide__slide">
              <slot :item="item"> </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const SplideJS = () => import("@splidejs/splide");
import "@splidejs/splide/dist/css/splide-core.min.css";

export default {
  name: "AppSlider",
  components: {},
  props: {
    list: {
      type: Array,
      required: true,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    slideCount: {
      type: [String, Number],
      default: 4,
    },
  },
  data() {
    return {
      cardsSlider: null,
    };
  },

  computed: {
    count() {
      if (this.isMobile) {
        return 1;
      }
      if (this.isDesktopSmall) {
        return this.medium ? 2 : 3;
      }
      return this.medium ? 3 : this.slideCount;
    },
    options() {
      return {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        rewind: true,
        drag: this.list.length > this.count,
        perPage: this.count,
        perMove: 1,
        gap: 15,
        arrows: false,
        pagination: true,
        breakpoints: {
          1240: {
            gap: 15,
          },
          1024: {
            perPage: 3,
            gap: 15,
          },
          900: {
            perPage: 2,
            gap: 15,
          },
          550: {
            perPage: 1,
          },
        },
      };
    },
  },
  methods: {
    async init() {
      const refSlider = this.$refs["slider"];
      const Splide = await SplideJS();
      const slider = new Splide.default(refSlider, this.options);
      slider.mount();
      this.checkArrows(0);
      slider.on("move", (newIndex) => {
        this.checkArrows(newIndex);
        this.$emit("select", { index: newIndex });
      });
      this.cardsSlider = slider;
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    list() {
      this.init();
    },
  },
  beforeDestroy() {
    if (this.cardsSlider) {
      const cardsSlider = this.cardsSlider;
      setTimeout(() => {
        cardsSlider.destroy();
      }, 150);
    }
  },
};
</script>

<style lang="scss" scoped>
.app-slider {
  position: relative;
  width: 100%;
}
.app-slider__button-previous,
.app-slider__button-next {
  display: none;
}
@media (max-width: 1350px) {
}

@media (max-width: 991px) {
  .app-slider {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (max-width: 768px) {
  .app-slider {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
}
</style>
