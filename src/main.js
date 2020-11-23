import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import MdContact from "./components/modais/MdContact";

Vue.config.productionTip = false;

Vue.component("TheHeader", TheHeader);
Vue.component("TheFooter", TheFooter);
Vue.component("MdContact", MdContact);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
