import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
Vue.config.productionTip = false
//全局注册指令
import direativeAll from '@/directives/index'
Vue.use(direativeAll)

router.beforeEach((to, from, next) => { 
  //document.title = to.meta.title;
  let isLogin = window.localStorage.getItem('accessToken');
  if (isLogin) {
    next()
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next('/login')
    }
  }
    
  next()
});
router.afterEach(() => {
  window.scrollTo(0, 0);
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
