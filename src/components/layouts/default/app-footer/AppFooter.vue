<template>
  <footer class="footer py-30">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__left">
          <router-link to="/" class="footer__logo">
            <img src="/svg/logo_footer.svg" alt="logo" />
          </router-link>
        </div>
        <div class="footer__right">
          <div class="footer__socials">
            <app-text
              :weight="isMobile ? 600 : 400"
              :size="isMobile ? 16 : 18"
              line-height="21"
              :class="isMobile ? 'mr-0' : 'mr-10'"
            >
              Biz ijtimoiy tarmoqlardamiz
            </app-text>
            <div class="footer__socials-items mr-20">
              <a href="#" target="_blank" class="footer__socials-item">
                <img src="/icons/facebook.svg" alt="" />
              </a>
              <a href="#" target="_blank" class="footer__socials-item">
                <img src="/icons/instagram.svg" alt="" />
              </a>
              <a href="#" target="_blank" class="footer__socials-item">
                <img src="/icons/telegram.svg" alt="" />
              </a>
            </div>
            <div class="footer__play-items">
              <a href="#" target="_blank" class="footer__play-item">
                <img src="/icons/app-store.svg" alt="" />
              </a>
              <a href="#" target="_blank" class="footer__play-item">
                <img src="/icons/google-play.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <AppText
          :weight="isMobile ? 600 : 400"
          size="16"
          line-height="21"
          class="text-center mb-10"
          :class="isMobile ? '' : 'mr-20'"
        >
          © 2022 Barcha huquqlar himoyalangan
        </AppText>
        <AppText
          :weight="isMobile ? 600 : 400"
          size="16"
          line-height="21"
          class="text-center mb-10"
          :class="isMobile ? '' : 'mr-20'"
        >
          Konfidensiallik siyosati
        </AppText>
        <AppText
          :weight="isMobile ? 600 : 400"
          size="16"
          line-height="21"
          class="text-center mb-10"
          :class="isMobile ? '' : 'mr-20'"
        >
          Foydalanuvchi shartnomasi
        </AppText>
      </div>
    </div>
  </footer>
</template>

<script>
import "./footer.css";
export default {
  name: "AppFooter",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped></style>
