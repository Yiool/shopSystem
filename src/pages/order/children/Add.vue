<template>
  <div>
    <brand-rumb :links="navLinks"></brand-rumb>
    <!-- 查询模块 -->
    <!-- <div class="search-part">
      <el-input :placeholder="searchData.placeholder" icon="search" v-model="searchData.searchContent" :on-icon-click="handleIconClick">
      </el-input>
    </div> -->
  </div>
</template>

<script>
  import brandRumb from '../../../components/BreadCrumb.vue'
  export default {
    data(){
      return {
        navLinks:[
          {
            title:'订单管理',
            path:'/home/order'
          },{
            title:'订单列表',
            path:'/home/order/list'
          },{
            title:'开单',
            path:'/home/order/add'
          }
        ]
      }
    },
    components:{
      brandRumb
    }
  }
</script>
