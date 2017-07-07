<template>
    <div class="login-box">
        <div class="form-box">
            <el-form ref="form" label-width="100px">
                <el-form-item label="用户名">
                    <el-input v-model="username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                
                <p class="warning-tips" v-show="showWarning">用户名或密码错误</p>

                <el-form-item>
                    <el-button type="primary" size="large" @click="login()">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import mock from '../../util/mock';
export default {
    data() {
        return {
            username: '',
            password: '',
            showWarning:false
        }
    },
    methods: {
        login: function () {
            this.axios.post('http://login.cn', {
                username: this.username,
                password: this.password
            }).then((response) => {
                if (response.data.status == 0) {
                    this.$store.dispatch("login");
                    this.$router.push({ path: '/home' });
                }else {
                    this.showWarning = true;
                }
            })
            /*var payLoad = { username: this.username, password: this.password };
            this.$store.dispatch("login", payLoad).then(() => {
                if (this.$store.state.isLogin) {
                    // $state.push();
                    console.log(this.$router.push);
                    // this.$router.push({path: '/home'});
                    // this.router.push('home')
                }
            });*/

        },
    }
}
</script>

<style lang="less" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background: #fff url('./images/login-bg.jpg') no-repeat center;
    .form-box {
        width: 500px;
        padding-top: 50px;
        padding-right: 20px;
        padding-bottom: 30px;
        position: fixed;
        top: 150px;
        right: 300px;
        box-shadow: 0 0 5px rgba(0, 0, 0, .25);
        .warning-tips {
            color: red;
            line-height: 34px;
            padding-left: 60px;
        }
        input {
            background: transparent;
        }
    }
}
</style>


