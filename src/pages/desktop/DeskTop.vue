<template>
    <div>
        <brand-rumb :links="navLinks"></brand-rumb>
        <div class="m-content">
            <h3 class="welcome">欢迎、Yiool !</h3>
            <div class="fast-start">
                <h3 class="title">快速开始</h3>
                <div class="content" style="display:inline-block;">
                    <el-input v-model="mobile" placeholder="请输入会员手机号"></el-input>
                    <el-button @click.native="goCustomerList(mobile)">快速开始</el-button>
                </div>

            </div>
            <div class="data-statistics f-cb">
                <h3 class="title">数据统计</h3>
                <el-card class="box-card sale">
                    <h4>销售额</h4>
                    <span class="iconfont icon-jinqian-copy-copy"></span>
                    <p>
                        <i class="symbol">￥</i> {{showData.saleCount}}</p>
                </el-card>
                <el-card class="box-card order">
                    <h4>新订单</h4>
                    <span class="iconfont icon-dingdan"></span>
                    <p>{{showData.orderCount}}</p>
                </el-card>
                <el-card class="box-card customer">
                    <h4>新会员</h4>
                    <span class="iconfont icon-huiyuanguanli"></span>
                    <p>{{showData.customerCount}}</p>
                </el-card>
                <el-card class="box-card task">
                    <h4>今日回访任务数</h4>
                    <p>{{showData.taskCount}}</p>
                </el-card>
            </div>

            <div class="data-analysis">
                <h3 class="title">数据分析</h3>
                <div>
                    <span>周</span>
                    <span>月</span>
                    <span>年</span>
                </div>
                <div class="charts-wraper">
                    <div id="myChart"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import brandRumb from '../../components/BreadCrumb.vue'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
require('echarts/lib/chart/bar')
    // 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
    data() {
        return {
            navLinks: [
                {
                    title: '首页',
                    path: '/home'
                }, {
                    title: '工作台',
                    path: '/home/desktop'
                }
            ],
            mobile: '',
            showData: {
                saleCount: '1000',
                orderCount: '10',
                customerCount: '20',
                taskCount: '5'
            }
        }
    },
    components: {
        brandRumb
    },
    methods:{
        initChart:function(){
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
        },
        goCustomerList:function(mobile){
            console.log(mobile);
            if(!mobile){
                return false;
            }
            this.$router.push({
                path:'/home/customer/list/1',
                query:{keyword:mobile}
            });
        }
    },
    created() {
        console.log('desktop-init');
    },
    mounted(){
        this.initChart();
    }
}
</script>

<style lang="less" scoped>
.m-content {
    padding: 20px 30px;
    .welcome {
        font-size: 16px;
        margin-bottom: 20px;
    }
    .box-card {
        float: left;
        width: 220px;
        position: relative;
        height: 120px;
        margin-right: 30px;
        h4 {
            font-size: 16px;
            color: #333;
            margin-bottom: 20px;
        }
        span {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 30px;
        }
        p {
            font-size: 30px;
        }
    }
    .sale {
        background-color: #20A0FF;
        .symbol {
            // font-size: 20px;
        }
    }
    .order {
        background-color: #13CE66;
    }
    .customer {
        background-color: #F7BA2A
    }
    .task {
        background-color: #FF4949
    }
    .title {
        font-size: 16px;
        padding-left: 15px;
        margin-bottom: 20px;
        line-height: 20px;
        border-left: 3px solid #20A0FF;
    }
    .fast-start {
        margin-bottom: 20px;
        .el-input {
            width: 200px;
            margin: 0 auto;
        }
    }
    .data-analysis {
        margin-top: 20px;
    }
}
#myChart {
    width: 500px;
    height: 300px;
}
</style>