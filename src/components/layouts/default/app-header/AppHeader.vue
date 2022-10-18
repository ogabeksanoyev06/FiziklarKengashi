<template>
  <headroom>
    <header class="header">
      <div class="container">
        <div class="header-top header__inner">
          <div class="header__left">
            <router-link to="/" class="logo">
              <img src="/svg/logo.svg" alt="logo" />
              <p class="logo__title">
                <span>Fizika-Texnika</span><br />Instituti
              </p>
            </router-link>
            <button class="header-search__cat a_btn">
              <img src="/icons/hamburger.svg" alt="" />
              <span>Konferensiyalar</span>
            </button>
            <div class="header-search">
              <form class="header-search__form" style="z-index: 5">
                <input
                  type="text"
                  placeholder="Nimani o’rganishni xohlaysiz?"
                  class="header-search__input"
                />
                <button type="submit" class="header-search__btn">
                  <img src="/icons/search.svg" alt="ico" />
                </button>
              </form>
            </div>
          </div>
          <div class="header__right">
            <div
              class="header__lang-wrap"
              @click="languageDropdown = !languageDropdown"
              v-on-click-outside:excludedClass="hideLanguageDropdown"
            >
              <div class="header__lang">
                <img class="icons" src="/icons/langUz.svg" alt="" />
                <span>O'zbekcha</span>
                <img src="/icons/angle-bottom.svg" alt="" />
              </div>
              <transition name="slide">
                <div class="header__dropdown" v-if="languageDropdown">
                  <ul class="header__dropdown-wrap">
                    <li
                      @click="changeLanguage('uz')"
                      class="header__dropdown-item"
                    >
                      <a class="header__dropdown-link"> O'zbekcha</a>
                    </li>
                    <li
                      @click="changeLanguage('ru')"
                      class="header__dropdown-item"
                    >
                      <a class="header__dropdown-link"> Ruscha </a>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>

            <router-link to="/" class="header__auth-link">
              <button class="header__auth-btn a_btn">
                <img src="/icons/accaunt.svg" alt="" />
                <span>Kirish</span>
              </button>
            </router-link>

            <button class="humbergur__btn a_btn">
              <img src="/icons/hamburger.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="header__inner-mobile">
          <button class="header-search__cat a_btn">
            <img src="/icons/hamburger.svg" alt="" />
            <span>Konferensiyalar</span>
          </button>
          <button class="header__search-mobile a_btn">
            <img src="/icons/search.svg" alt="" />
          </button>
        </div>
        <div class="header-bot">
          <ul class="header-bot__items">
            <li
              class="header-bot__item"
              v-for="(item, index) in menu_bot"
              :key="index"
            >
              <router-link to="/">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </headroom>
</template>

<script>
import "./header.css";
import { headroom } from "vue-headroom";
export default {
  name: "AppHeader",
  components: { headroom  },
  data() {
    return {
      languageDropdown: false,
      menu_bot: [
        {
          id: 1,
          title: "Biz haqimizda",
          link: "/",
        },
        {
          id: 2,
          title: "Fiziklar kengashi",
          link: "/",
        },
        {
          id: 3,
          title: "Fizikaga oid videokurslar",
          link: "/",
        },
        {
          id: 4,
          title: "Konferensiyalar",
          link: "/",
        },
        {
          id: 5,
          title: "Yangiliklar",
          link: "/",
        },
        {
          id: 6,
          title: "Onlayn resurslar",
          link: "/",
        },
        {
          id: 7,
          title: "Hujjatlar",
          link: "/",
        },
        {
          id: 8,
          title: "Bog’lanish",
          link: "/",
        },
      ],
    };
  },

  computed: {},
  methods: {
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },
    changeLanguage(id) {
      console.log(id);
    },
  },
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped></style>
