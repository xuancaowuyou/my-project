import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
    state: {
        count:0
    },
    getters: {}, 
    mutations: {
        m_add_count(state,data) {
            state.count = data
        }
    },
    actions: {
        
    },
   modules: {} // store模块
})
export default store;