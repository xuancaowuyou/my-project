import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
        path: '/',
        redirect:'/home'
    }, {
        path: '/home',
        name: 'MyHome',
        component: () => import("@/views/home"),
    }, {
        path: '/about',
        name: 'MyAbout',
        component:()=>import("@/views/about")
    }]
})
export default router;