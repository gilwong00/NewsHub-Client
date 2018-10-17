import Vue from 'vue'
import Router from 'vue-router'

//import components
import Articles from '../components/Articles.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/articles/:id',
            name: 'Article',
            component: Articles
        }
    ]
})
