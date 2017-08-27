# vue-stystem

> A Vue.js project  针对中小型眼镜店铺后台管理系统

> 前端：Vue: "^2.3.3", vue-router: "^2.3.1",vuex: "^2.3.1" ,element-ui: "^1.3.7",axios: "^0.16.2"

> 后端：node： "^6.10.2",express:"^4.14.1"

> 数据库：mogodb

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


##开发注意事项：
### 前端
1. 对http网络请求知识了解的不够深,项目中使用axios发送post携带参数,前端报错 ` XMLHttpRequest cannot load http://localhost:8080/api/v1/customer. Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response. `  大致意思为没有设置有效的请求头，解决办法是在axios全局设置中添加请求头设置：
```   
   this.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
``` 

2. 组件生命周期

    场景：新增一个会员后返回会员列表页，然后再次进入新增页面，输入框中的数据依然存在；

    原因分析：第一次进入新增会员页面组件时会触发` created `生命周期，初始化一个新实例，然后该组件Vue实例上挂载的数据便会被缓存，再次进入时便不会再次初始化新实例而是使用缓存中的数据；

    解决方法：新增页面数据提交成功后调用 ` $destory() ` 方法，手动销毁该组件，确保每次进入该组件都会重新初始化该组件。

### 后台
1. 要解析请求中携带的参数、需使用express中间件body-parser，其中路径信息保存在 ` req.url ` 中； ` params ` 信息保存在 `req.params` 中；` query` 查询参数保存在  `req.query` 中。能获取到上述参数后便可以获取这些参数、进行针对性操作


### 数据库 

