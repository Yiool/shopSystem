<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import TopBar from './components/TopBar';
import SiderBar from './components/SiderBar'
import { mapState } from 'vuex';
export default {
  name: 'app',
  components: {
    SiderBar,
    TopBar
  }
  /*computed: {
    ...mapState({
      'isLogin'
    })
  }*/
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  .windowframe {
    padding: 20px 30px; // background-color: #d7d7d7;
  }
}
</style>
