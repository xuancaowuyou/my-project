import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode:'hash', //默认是hash模式，url带#号  history
    routes: [{
        path: '/',
        redirect:'/home'
    }, {
        path: '/home',
        name: 'MyHome',
        component: () => import("@/views/home"),
        meta:{title:'home'}
    }, {
        path: '/about',
        name: 'MyAbout',
        component: () => import("@/views/about"),
        meta:{title:'about'}
    }]
})
export default router;