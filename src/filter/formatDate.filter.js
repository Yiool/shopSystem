import moment from 'moment'
import Vue from 'vue'

const formatDate = Vue.filter('formatDate', function formatStatus(input, arg) {
    if (!input) {
        return '';
    }
    let type = arg || 'YYYY-MM-DD HH:mm:ss';
    return moment(input * 1).format(type); //2015-07-26 23:46:15;
})

export default formatDate