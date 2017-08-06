<template>
  <div class="top-bar">
    <div class="store-info">
      <img src="" alt="">
      <span class="store-name">
        众望视光中心
      </span>
    </div>
    <div class="user-info f-cb">
      <div class="f-fr">
        <img src="" alt="">
        <span>用户名</span>
        <span>权限</span>
        <span>退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>

<style lang="less" scoped>
.top-bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  .store-info {
    width: 100%;
    height: 50px;
    background-color: #f2f2f2;
  }
  .user-info {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #20A0FF;
    div {
      margin-right: 20px;
      span {
        margin: 0 5px;
      }
    }
  }
}
</style>
