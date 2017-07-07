import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login';
import page404 from '../pages/404/404';
import Home from '../pages/home/Home';
import Staff from '../pages/Staff/Staff';
import Commodity from '../pages/commodity/Commodity'
import Order from '../pages/order/Order'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: "Home",
            component: Home,
            children: [{
                    path: 'staff/:type',
                    component: Staff,
                },
                {
                    path: 'commodity/:type',
                    component: Commodity
                },
                {
                    path: 'order/:type',
                    component: Order
                }
                /*{
                    path: 'addStaff',
                    component: addStaff
                }*/
            ]
        },
        {
            path: '*',
            component: page404
        }
    ],
})