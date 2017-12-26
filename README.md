# vue-stystem

> A Vue.js project  针对中小型眼镜店铺后台管理系统

> 前端：Vue: "^2.3.3", vue-router: "^2.3.1",vuex: "^2.3.1" ,element-ui: "^1.3.7",axios: "^0.16.2"

> 后端：node： "^6.10.2",express:"^4.14.1"

> 数据库：mongoDB,redis,  mongoose: "^4.11.6",

> 其它插件、工具库 ：lodash ："^4.17.4" ，echarts："^3.7.0"


## 功能模块
* 登录
* 注册
* 会员模块
* 订单模块
* 商品模块
* 财务模块
* 库存模块
* 权限模块



##开发注意事项：
### 前端
1. 对http网络请求知识了解的不够深,项目中使用axios发送post携带参数,前端报错 ` XMLHttpRequest cannot load http://localhost:8080/api/v1/customer. Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response. `  大致意思为设置后端不允许设置`Content-Type`请求头，
解决方法：响应头中允许设置 ` Content-Type ` 请求头
```
    //伪代码
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
```

2. 组件生命周期

    场景：新增一个会员后返回会员列表页，然后再次进入新增页面，输入框中的数据依然存在；

    原因分析：第一次进入新增会员页面组件时会触发` created `生命周期，初始化一个新实例，然后该组件Vue实例上挂载的数据便会被缓存，再次进入时便不会再次初始化新实例而是使用缓存中的数据；

    解决方法：新增页面数据提交成功后调用 ` $destory() ` 方法，手动销毁该组件，确保每次进入该组件都会重新初始化该组件。

3. Vue中使用echarts图表

    安装依赖

    `npm install echarts -S`

    按需引入
    在组件中按需引入需要用到的图表模块，例：

    ```
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/bar')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')

    // 在 method 中定义创建图标的方法
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: 'ECharts 入门示例' },
                tooltip: {},
                xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    }

    ```

### 后台

后端api文档请移步至：[API_DOC.md](./API_DOC.md)

1. 要解析请求中携带的参数、需使用express中间件body-parser，其中路径信息保存在 ` req.url ` 中； ` params ` 信息保存在 `req.params` 中；` query` 查询参数保存在  `req.query` 中。能获取到上述参数后便可以获取这些参数、进行针对性操作


### 数据库
> 数据库采用mongoDB 引入Node.js的MongoDB对象建模工具Mongoose。schema是mongoose里会用到的一种数据模式，可以理解为表结构的定义。schema中以键值对的形式,定义数据库中每个字段的类型、默认值、是否必填等参数

#### 用户数据
> 初步使用 ` RBAC`(Role-Based Access Control)模型 建立三个 `schema` 用户表、角色表、权限表。使用该模型只需关注用户是何种角色，角色对应的是何种权限，将三者关系充分解耦，当需要改变某个用户的权限时只需改变其角色，不用关心其它。需要增加或改变某种权限时只需要增加或改变权限表中的内容即可，增强其扩展性。本系统大致只分为两类角色，店长和普通店员，分别对应两种权限列表。前端登录后后端会返回该角色的权限列表，然后前端根据该列表进行权限控制，粒度细化到按钮级别。

1. 用户schema

| Field | Type | Reqiured | Default | explanation
| ---- | ---- | ---- | ---- | ----
| uid  | number | true  | | 用户唯一id
| uname | string | true | | 用户名
| pword | string | true | | 用户密码
| role | string | true  | | 用户角色 店长为0 店员为1


2. 角色schema

| Field | Type | Reqiured | Default | explanation
| ---- | ---- | ---- | ---- | ----
| _id  | ObjectId | true | |
| role | string | true | | 角色名称 0 or 1
| permission | string | true | | 权限等级 0 or 1

3. 权限schema

| Field | Type    | Reqiured | Default | explanation
| ---- | ----     | ---- | ---- | ----
| _id  | ObjectId | true |      |
| permission | array | true | | 权限等级对应的权限列表

***


4. 会员schema

| Field | Type | Reqiured | Default | explanation
| ----     | ----    | ----  | ---- | ----
| userid   | number  | true  |   | 主键 会员唯一id
| username | string  | false |   | 会员名称
| gender   | number  | false |   | 会员性别 0-男 1-女
| profession| string | false |   | 会员职业
| grade    | number  | true  | 0   | 会员类型 0-普通会员 1-VIP会员 默认为0
| mobile   | number  | true  |   | 会员电话 客户端唯一标识
| age      | number  | false |   | 会员年龄



<!-- ## Build Setup

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

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader). -->

svn test
