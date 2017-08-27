<template>
  <div>
    <brand-rumb :links="navLinks"></brand-rumb>
  </div>
</template>

<script>
import brandRumb from '../../../components/BreadCrumb.vue'
export default {
  data() {
    return {
      navLinks:[
        {
            title:'商品管理',
            path:'/home/goods'
          },{
            title:'商品列表',
            path:'/home/goods/list'
          }
      ]
    }
  },
  components: {
    brandRumb
  },
  created(){
    console.log('goods-init');
  }
}
</script>
