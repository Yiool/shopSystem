import Vue from 'vue'
import Vuex from 'vuex'
import mock from '../util/mock';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);

const state = {
    isLogin: false,
    permission: ['home', 'desktop', 'customer', 'customer:add', 'customer:edit', 'customer:delete', 'customer:detail', 'order', 'order:add']
};

const actions = {
    login({ commit }) {
        commit('login');
    },
    fetchData({ commit }, payload) {
        axios.get({
            page: payload,
            pageSize: 10
        }).then(function(res) {
            if (res.status == 0) {
                commit('updateData', res.data);
            }
        })
    }
}


const mutations = {
    login(state) {
        state.isLogin = true;
    },
    updateData(state, data) {
        state.dataList = data;
    }
};

const getters = {

}


export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})