<template>
    <div>
        <brand-rumb :links="navLinks"></brand-rumb>
        <div class="m-content">
            <h3 class="welcome">欢迎、Yiool  !</h3>
            <el-card class="box-card sale">
                <h4>销售额</h4>
                <span class="iconfont icon-jinqian-copy-copy"></span>
                <p><i class="symbol">￥</i> {{showData.saleCount}}</p>
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
    </div>
</template>

<script>
import brandRumb from '../../components/BreadCrumb.vue'
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
            showData:{
                saleCount:'1000',
                orderCount:'10',
                customerCount:'20',
                taskCount:'5'
            }
        }
    },
    components: {
        brandRumb
    },
    created() {
        console.log('desktop-init');
    }
}
</script>

<style lang="less" scoped>
.m-content {
    padding:20px 30px;
    .welcome {
        font-size: 16px;
        margin-bottom:20px;
    }
    .box-card {
        float: left;
        width: 220px;
        position: relative;
        height: 120px;
        margin-right: 30px;
        h4 {
            font-size: 16px;
            color:#333;
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
}
</style>