const API_CONFIG = {
    home: {
        login: {
            url: '/login',
            type: 'post'
        },
        regist: {
            url: '/regist',
            type: 'post'
        }
    },
    order: {
        list: {
            url: '/order',
            type: 'get'
        },
        detail: {
            url: '/order',
            type: 'get'
        },
        add: {
            url: '/order',
            type: 'post'
        }
    },
    customer: {
        list: {
            url: '/customer',
            type: 'get'
        },
        detail: {
            url: '/customer',
            type: 'get'
        },
        add: {
            url: '/customer',
            type: 'post'
        }
    },
    goods: {
        list: {
            url: '/goods',
            type: 'get'
        },
        detail: {
            url: '/goods',
            type: 'get'
        },
        add: {
            url: '/goods',
            type: 'post'
        }
    }
}

export default API_CONFIG