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
            title:'订单管理',
            path:'/home/order'
          },{
            title:'订单列表',
            path:'/home/order/list'
          }
        ]
      }
    },
    components:{
      brandRumb
    },
    created(){
      console.log('order-init');
    }
  }
</script>
