import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

Vue.config.productionTip = false;

Vue.component("TheHeader", TheHeader);
Vue.component("TheFooter", TheFooter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
