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
        <!-- <Pagination :pagegation-config="pagegationConfig" ></Pagination> -->

    </div>
</template>

<script>
export default {
    components:{
        // Pagegation
    },
    data() {
        return {
            username: '',
            password: '',
            role:'0',
            showWarning:false,
        }
    },
    methods: {
        interception:function(){
          let flag = true;
          if(!this.username){
            flag= false;
          }
          if(!this.password){
            flag= false;
          }
          return flag;
        },
        login: function () {
            if(!(this.interception())){
              return false;
            }
            this.http('home','login',{username:this.username,password:this.password,role:'0'}).then((res)=>{
              let data = res.data;
              if(data.status === 0){
                this.$router.push({path:'/home'});
              } else {
                this.showWarning = true;
              }
            })
        },
    },
    mounted(){

    }
}
</script>

<style lang="less" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background: url('./images/login-bg.jpg') center;
    .form-box {
        width: 500px;
        padding-top: 50px;
        padding-right: 20px;
        padding-bottom: 30px;
        position: fixed;
        top: 150px;
        right: 300px;
        box-shadow: 0 0 5px rgba(0, 0, 0, .25);
        background: url('./images/login-bg.jpg') no-repeat center;
        background-size: 100% 100%;
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


