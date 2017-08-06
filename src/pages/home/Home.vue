<template>
  <div class="window-framework">
    <top-bar></top-bar>
    <div class="main-content f-cb">
      <sider-bar class="sider-bar f-fl"></sider-bar>
      <router-view class="view-container"></router-view>
    </div>
  </div>
</template>

<script>
import siderBar from '../../components/SiderBar'
import topBar from '../../components/TopBar'

export default {
  components: {
    siderBar, topBar
  },
  data() {
    return {

    }
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建 
    next(vm => {
      // 通过 `vm` 访问组件实例
      // console.log(vm);
      // console.log(vm.$store.state);
      /*if(!vm.$store.state.isLogin){
        console.log("没登录");
        vm.$router.push({ path: '/login' });
      }*/
    })
  },
}
</script>

<style lang="less" scoped>
.window-framework {
  width: 100%;
  height: 100%;
  .main-content {
    height: 100%;
    padding-top: 80px;
  }
}

.sider-bar {
  position: fixed;
  top: 80px;
  left: 0;
  height: 100%;
  width: 150px;
  min-height: 100%;
  background-color: #eef1f6;
}

.view-container {
  padding-left: 150px;
}
</style>


