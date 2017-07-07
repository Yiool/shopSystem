<template>
  <div>
      {{$route.params.type}}
  </div>
</template>

<script>
export default {
    data(){
        return {
            
        };
    },
    mounted(){
        console.log(this.$route);
    }
}
</script>

<style lang="less">

</style>




