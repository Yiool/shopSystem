const API_CONFIG = {
    home: {
        login: {
            url: '',
            type: 'post'
        },
        regist: {
            url: '',
            type: 'post'
        }
    },
    order: {
        list: {
            url: '',
            type: 'get'
        },
        detail: {
            url: '',
            type: 'get'
        },
        add: {
            url: '',
            type: 'post'
        }
    },
    customer: {
        list: {
            url: '/customer',
            type: 'get'
        },
        detail: {
            url: '',
            type: 'get'
        },
        add: {
            url: '/customer',
            type: 'post'
        }
    },
    goods: {
        list: {
            url: '',
            type: 'get'
        },
        detail: {
            url: '',
            type: 'get'
        },
        add: {
            url: '',
            type: 'post'
        }
    }
}

export default API_CONFIG