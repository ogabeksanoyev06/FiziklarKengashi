<template>
  <section class="py-40">
    <div class="section__top mb-30">
      <AppText
        :size="isMobile ? 24 : 30"
        :line-height="isMobile ? 28 : 36"
        weight="700"
        class="text-color-default"
      >
        Yangiliklar
      </AppText>
    </div>
    <app-slider :list="list">
      <template #default="{ item }">
        <app-news-card
          :link="item.link"
          :title="item.title"
          :subtitle="item.subtitle"
          :photo="item.photo"
          :id="item.id"
          :value="item.value"
          :price="item.price"
        />
      </template>
    </app-slider>
    <div class="section__bottom-details mt-20">
      <router-link class="section__link" to="/">
        <button class="a_btn">Barchasi</button>
      </router-link>
    </div>
  </section>
</template>
<script>
import AppNewsCard from "@/components/shared-components/AppNewsCard.vue";
import AppSlider from "@/components/shared-components/AppSlider.vue";
export default {
  name: "AppNews",
  components: { AppNewsCard, AppSlider },
  data() {
    return {
      list: [
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
        },
      ],
    };
  },
};
</script>
<style scoped>
.section__top {
  display: flex;
  width: 100%;
}

@media (max-width: 1140px) {
  .section__top {
    padding: 10px;
    justify-content: center;
    text-align: center;
  }
  .section__bottom-details {
    justify-content: center;
    text-align: center;
  }
}
</style>
