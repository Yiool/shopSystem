<template>
  <div class="nav-box">
    <el-breadcrumb  :separator="separator">
      <el-breadcrumb-item  v-for="(item,index) in links" :to="item.path" :key="index">{{item.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    props:{
      separator:{
        type:String,
        default:"/"
      },
      links:{
        type:Array,
      }
    }
  }
</script>

<style lang="less" scoped>
  .nav-box {
    padding-left: 20px;
    border-bottom: 1px solid #eee;
    .el-breadcrumb {
      line-height: 30px;
    }
  }
</style>

