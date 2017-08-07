<template>
  <div>
   <brand-rumb :links="navLinks"></brand-rumb>
  </div>
</template>

<script>
  import brandRumb from '../../../components/BreadCrumb.vue'
  export default {
    data(){
      return {
        navLinks:[
          {
            title:'商品管理',
            path:'/home/goods'
          },{
            title:'商品列表',
            path:'/home/goods/list'
          },{
            title:'新增商品',
            path:'/home/goods/add'
          }
        ]
      }
    },
    components:{
      brandRumb
    }
  }
</script>
