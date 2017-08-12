# vue-stystem

> A Vue.js project

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


## shop-admin-stystem
##开发注意事项：
### 前端
1. 对http网络请求知识了解的不够深,项目中使用axios发送post携带参数,前端报错 ` XMLHttpRequest cannot load http://localhost:8080/api/v1/customer. Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response. `  大致意思为没有设置有效的请求头，解决办法是在axios全局设置中添加请求头设置：
```   
   this.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
``` 

### 后台
1. 要解析请求中携带的参数、需使用express中间件body-parser，其中路径信息保存在 ` req.url ` 中； ` params ` 信息保存在 `req.params` 中；` query` 查询参数保存在  `req.query` 中。能获取到上述参数后便可以获取这些参数、进行针对性操作


### 数据库 

