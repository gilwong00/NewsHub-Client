// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store/index";
import axios from "axios";
import router from "./router";
import {
  MdButton,
  MdContent,
  MdTabs,
  MdApp,
  MdList,
  MdIcon,
  MdToolbar,
  MdTable
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
Vue.config.productionTip = false;

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdApp);
Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdToolbar);
Vue.use(MdTable);

/* eslint-disable no-new */
new Vue({
  router,
  el: "#app",
  store: store,
  render: h => h(App)
});
