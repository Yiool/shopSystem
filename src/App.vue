<template>
  <div id="app">
    <top-bar v-if="isLogin"></top-bar>
    <div class="sider-box">
      <sider-bar></sider-bar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import data from './util/mock';
import TopBar from './components/TopBar';
import SiderBar from './components/SiderBar'
import { mapState } from 'vuex';
export default {
  name: 'app',
  components: {
    SiderBar,
    TopBar
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'isLogin'
  ]),
  /*computed: {
    ...mapState({
      'isLogin'
    })
  }*/
  // mounted() {
  //   this.axios.get('http://yiool.cn').then((response) => {
  //     console.log(response.data);         
  //   })
  // }

}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  .sider-box {
    width: 100%;
    height: 100%;
  }
  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
  }

  .sider-box {
    position: absolute;
    top: 80px;
    left:0;
  }
}
</style>
