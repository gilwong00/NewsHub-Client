import Vue from 'vue'
import Router from 'vue-router'

//import components
import Auth from './routes/auth';
import Articles from './routes/articles';

Vue.use(Router);

const routes = [].concat(Auth, Articles);

export default new Router({
    mode: 'history',
    routes: routes
});
