import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Intro from './components/Intro.vue';
import TryMe from './components/TryMe';
import WhatIsThis from "./components/WhatIsThis";
import ElementPresentation from "./components/ElementPresentation";
import RobotHi from "./components/Robot-Hi";
import Annotator from "./components/Annotator";
import RestartFrame from "./components/RestartFrame";
import Outro from "./components/Outro";
import BasicFrame from "./components/BasicFrame";
import ModelFrame from "./components/ModelFrame";
import DecisionTree from "./components/DecisionTree";



Vue.use(BootstrapVue);
Vue.component('intro', Intro);
Vue.component('try-me', TryMe);
Vue.component('what-is-this', WhatIsThis);
Vue.component('element-presentation', ElementPresentation);
Vue.component('robot-hi', RobotHi);
Vue.component('annotator', Annotator);
Vue.component('restart-frame', RestartFrame);
Vue.component('outro', Outro);
Vue.component('basic-frame', BasicFrame);
Vue.component('model-frame', ModelFrame);
Vue.component('decision-tree', DecisionTree)


new Vue({
  render: h => h(App)
}).$mount("#app");
