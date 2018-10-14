// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
//import router from './router';
import { MdButton, MdContent, MdTabs, MdApp, MdList, MdIcon, MdToolbar } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
Vue.config.productionTip = false;

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdApp);
Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdToolbar);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    //router,
    render: h => h(App)
});
