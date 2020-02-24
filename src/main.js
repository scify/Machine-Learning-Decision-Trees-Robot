import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import RestartFrame from "./components/RestartFrame";
import Outro from "./components/Outro";
import BasicFrame from "./components/BasicFrame";
import ModelFrame from "./components/ModelFrame";
import DecisionTree from "./components/DecisionTree";



Vue.use(BootstrapVue);
Vue.component('restart-frame', RestartFrame);
Vue.component('outro', Outro);
Vue.component('basic-frame', BasicFrame);
Vue.component('model-frame', ModelFrame);
Vue.component('decision-tree', DecisionTree)


new Vue({
  render: h => h(App)
}).$mount("#app");
