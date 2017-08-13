// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index.js'
import _ from 'lodash'
import Pagination from './components/pagination/index.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import ApiConfig from './util/apiRequestHandler'

import './assets/fonts/iconfont.css'

Vue.use(ElementUI); //使用element-ui
Vue.use(VueAxios, axios); //封装axios
Vue.use(Pagination); //将分页组件封装成全局组件
Vue.prototype.http = ApiConfig; // 封装数据后台交互函数


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})