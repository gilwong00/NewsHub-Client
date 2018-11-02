// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store/index'
import axios from 'axios';
import router from './router';
import InitMaterial from './materialWrapper';
import 'vue-material/dist/vue-material.min.css';
Vue.config.productionTip = false;

//load material UI theme
InitMaterial();

/* eslint-disable no-new */
new Vue({
    router,
    store: store,
    el: '#app',
    render: h => h(App)
});
