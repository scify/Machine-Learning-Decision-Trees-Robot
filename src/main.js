import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import MLCartClassifier from './components/MLCartClassifier.vue';
import MLSimpleDecisionTreeClassifier from './components/MLSimpleDecisionTreeClassifier.vue';

Vue.use(BootstrapVue);
Vue.component('ml-cart-classifier', MLCartClassifier);
Vue.component('ml-simple-dt-classifier', MLSimpleDecisionTreeClassifier);

new Vue({
  render: h => h(App)
}).$mount("#app");
