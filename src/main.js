import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import MLCartClassifier from '../../Machine-Learning-JS/src/components/MLCartClassifier.vue';

Vue.use(BootstrapVue);
Vue.component('ml-cart-classifier', MLCartClassifier);

new Vue({
  render: h => h(App)
}).$mount("#app");
