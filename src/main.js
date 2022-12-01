import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
Vue.config.productionTip = false
//全局注册指令
import direativeAll from '@/directives/index'
Vue.use(direativeAll)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
