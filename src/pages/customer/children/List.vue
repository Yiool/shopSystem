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
            title:'会员管理',
            path:'/home/customer'
          },{
            title:'会员列表',
            path:'/home/customer/list'
          }
      ]
    }
  },
  components: {
    brandRumb
  }
}
</script>
