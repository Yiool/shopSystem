<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import data from './util/mock';
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

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  .windowframe {
    padding: 20px 30px;
    // background-color: #d7d7d7;
  }
}
</style>
