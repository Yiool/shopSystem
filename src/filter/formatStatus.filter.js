import Vue from 'vue'

const STATUS_CONFIG = {
    genderType: {
        '0': '男',
        '1': '女'
    },
    gradeType: {
        '0': '普通会员',
        '1': 'VIP会员'
    }
}

const formatStatus = Vue.filter('formatStatus', function formatStatus(input, arg) {
    if (!input) {
        return '';
    }
    return STATUS_CONFIG[arg][input];
})

export default formatStatus;