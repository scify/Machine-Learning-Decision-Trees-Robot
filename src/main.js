import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import VueGtag from "vue-gtag";
import CookiesConsent from "./components/CookiesConsent.vue";
import VueCookies from "vue-cookies";
import VueI18n from "vue-i18n";
import { languages } from "./i18n";
import { defaultLocale } from "./i18n";

const messages = Object.assign(languages);

Vue.use(VueGtag, {
	config: { id: import.meta.env.VUE_APP_GA_ID },
	bootstrap: false,
});
Vue.use(BootstrapVue);
Vue.use(VueCookies);
Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: defaultLocale,
	fallbackLocale: "el",
	messages,
});

Vue.component("cookies-consent", CookiesConsent);

new Vue({
	render: (h) => h(App),
	i18n,
}).$mount("#app");
