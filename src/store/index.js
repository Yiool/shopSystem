import Vue from 'vue'
import Vuex from 'vuex'
import mock from '../util/mock';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);

const state = {
    isLogin: false
};

const actions = {
    login({ commit }) {
        commit('login');
    },
}


const mutations = {
    login(state) {
        state.isLogin = true;
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