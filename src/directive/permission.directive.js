import Vue from 'vue'
import store from '../store/index.js'

const permission = Vue.directive('permission', {
    bind: function(el, binding) {
        let flag = false;
        let permission = binding.arg;
        let permissionList = store.state.permission;
        _.forEach(permissionList, function(v, i) {
            if (v === permission) {
                flag = true;
            }
        });
        !flag && (el.style.display = 'none')
    }
})

export default permission