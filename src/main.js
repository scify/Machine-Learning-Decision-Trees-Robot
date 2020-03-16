import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import VueGtag from "vue-gtag";
import CookiesConsent from "./components/CookiesConsent";
import VueCookies from 'vue-cookies'

Vue.use(VueGtag, {
  config: { id: process.env.VUE_APP_GA_ID },
  bootstrap: false
});

Vue.use(BootstrapVue);
Vue.use(VueCookies);
Vue.component('cookies-consent', CookiesConsent);

new Vue({
  render: h => h(App)
}).$mount("#app");
