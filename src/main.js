import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import RobotAssistant from './components/Robot-Assistant.vue';

Vue.use(BootstrapVue);
Vue.component('robot-assistant', RobotAssistant);

new Vue({
  render: h => h(App)
}).$mount("#app");
