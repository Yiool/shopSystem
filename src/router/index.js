import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login'; //登录
import page404 from '../pages/404/404'; //404
import Home from '../pages/home/Home'; //主页
import PlaceHolder from '../components/PlaceHodler' //占位router-view
// import DeskTop from '../pages/desktop/DeskTop'; //工作台
import Staff from '../pages/Staff/Staff'; //员工管理
import OrdderList from '../pages/order/children/List' //订单列表
import AddOrder from '../pages/order/children/Add' //新增订单
import CustomerList from '../pages/customer/children/List' //会员列表
import AddCustomer from '../pages/customer/children/Add' //新增会员
import GoodsList from '../pages/goods/children/List' //商品列表
import AddGoods from '../pages/goods/children/Add' //新增商品
import FinancialList from '../pages/financial/children/List' //财务列表
import InventoryList from '../pages/inventory/children/List' //库存列表
import PermissionList from '../pages/permission/children/List' //权限列表



Vue.use(Router);

const routes = [{
        path: '/home',
        component: Home,
        redirect: '/home/desktop',
        children: [{
                path: 'desktop', //  工作台
                // component: DeskTop
                component: resolve => require(['../pages/desktop/DeskTop'], resolve),
            },
            {
                path: 'order', //订单管理
                component: PlaceHolder,
                redirect: 'order/list/1',
                children: [{
                        path: 'list/:id', //订单列表
                        component: OrdderList
                    },
                    {
                        path: 'add', //开单
                        component: AddOrder
                    }
                ]
            },
            {
                path: 'customer', // 会员中心
                component: PlaceHolder,
                redirect: 'customer/list/1',
                children: [{
                        path: 'list/:page', //会员列表
                        component: CustomerList
                    },
                    {
                        path: 'add', // 新增会员
                        component: AddCustomer
                    }

                ]
            },
            {
                path: 'goods',
                component: PlaceHolder,
                redirect: 'goods/list/1',
                children: [{
                    path: 'list/:id',
                    component: GoodsList
                }, {
                    path: 'add',
                    component: AddGoods
                }]
            },
            {
                path: 'financial',
                component: PlaceHolder,
                redirect: 'financial/list/1',
                children: [{
                    path: 'list/:id',
                    component: FinancialList
                }]
            },
            {
                path: 'inventory',
                component: PlaceHolder,
                redirect: 'inventory/list/1',
                children: [{
                    path: 'list/:id',
                    component: InventoryList
                }]
            },
            {
                path: 'permission',
                component: PlaceHolder,
                redirect: 'permission/list/1',
                children: [{
                    path: 'list/:id',
                    component: PermissionList
                }]
            }
        ]
    },
    {
        path: '/login',
        component: resolve => require(['../pages/login/Login'], resolve),
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '*',
        component: page404
    }
]



export default new Router({
    routes: routes,
})