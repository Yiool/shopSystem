import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Music from '@/components/Music';
import Login from '../pages/login/Login';
import page404 from '../pages/404/404'
import Home from '../pages/home/Home'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            // name: 'Login',
            // component: Login,
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
            component: Home
        }
    ]
})