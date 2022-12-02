import Vue from 'vue'
import Vuex from 'vuex'
import {getToken, getLogistics } from '@/api/index'

Vue.use(Vuex)

const store =  new Vuex.Store({
    state: {
        count: 0,
        logistics:[]
    },
    getters: {}, 
    mutations: {
        m_add_count(state,data) {
            state.count = data
        },
        m_logistics(state, data) {
            state.logistics = data;
        }
    },
    actions: {
        async a_token() {
            const result = await getToken();
            return result;
        },
        async a_logistics(content,data) {
            const result = await getLogistics(data);
            // if (result.code = 200) {
                // commit('m_logistics', result.data);
            // }
            console.log(content)
            return result;
        }
    },
   modules: {} // store模块
})
export default store;