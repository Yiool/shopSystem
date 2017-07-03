<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="sider-box">
      <sider-bar></sider-bar>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
import SiderBar from './components/SiderBar'
export default {
  name: 'app',
  components: {
    SiderBar
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  .sider-box {
    width: 100%;
    height: 100%;
  }
}
</style>
