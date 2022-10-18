import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppText from "@/components/shared-components/AppText";
import "./plugins/media/media-mixin";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./assets/styles/main.scss";
import "./plugins/directives/click-outside";
Vue.config.productionTip = false;

Vue.component("AppText", AppText);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
