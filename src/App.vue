<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<div class="sider-box">-->
      <!--<sider-bar></sider-bar>-->
    <!--</div>-->
    <router-view></router-view>
  </div>
</template>

<script>
import data from './util/mock';
export default {
  name: 'app',
  components: {
    // SiderBar
  },
  // mounted() {
  //   this.axios.get('http://yiool.cn').then((response) => {
  //     console.log(response.data);         
  //   })
  // }

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
