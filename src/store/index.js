//Initial Store setup
import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth'
import category from './modules/category';

//this allows Vuex to talk to Vue. This is the connection or the initial handshake between vuex to vue
Vue.use(Vuex);

export default new Vuex.Store({
    // this is how we connect our modules to our vuex store
    modules: {
        auth,
        category
    }
});