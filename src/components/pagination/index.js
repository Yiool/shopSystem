import pagination from './Pagination.vue'

const Pagination = {
    install: function(Vue) {
        Vue.component('Pagination', pagination)
    }
}
export default Pagination