import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login';
import page404 from '../pages/404/404';
import Home from '../pages/home/Home';
import DeskTop from '../pages/desktop/DeskTop.vue';
import Staff from '../pages/Staff/Staff';
import Commodity from '../pages/commodity/Commodity'
import Order from '../pages/order/Order'
import OrdderList from '../pages/order/children/List'
import AddOrder from '../pages/order/children/Add'
import CustomerList from  '../pages/customer/children/List'
import AddCustomer from '../pages/customer/children/Add'
import GoodsList from '../pages/goods/children/List'
import AddGoods from '../pages/goods/children/Add'
import PlaceHolder from '../components/PlaceHodler'
Vue.use(Router);

const routes = [
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'desktop',    //  工作台
                component:DeskTop
            },
            {
                path:'order',      //订单管理
                component:PlaceHolder,
                children:[
                    {
                        path:'list',   //订单列表
                        component:OrdderList
                    },
                    {
                        path:'add',   //开单
                        component:AddOrder  
                    }
                ]
            },
            {
                path:'customer',   // 会员中心
                component:PlaceHolder,
                children:[
                    {
                        path:'list', //会员列表
                        component:CustomerList
                    },
                    {
                        path:'add',  // 新增会员
                        component:AddCustomer
                    }

                ]
            },{
                path:'goods',
                component:PlaceHolder,
                children:[
                    {
                        path:'list',
                        component:GoodsList
                    },{
                        path:'add',
                        component:AddGoods
                    }
                ]
            }
        ]
    },
    {
        path:'/',
        redirect:'/home/desktop'
    }
]



export default new Router({
    routes: routes,
})