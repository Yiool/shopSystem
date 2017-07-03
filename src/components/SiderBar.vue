<template>
  <div class="sider-bar">
    <ul>
        <li v-for="(item,i) in menuData" :key="i">
          <p class="main-title">{{item.title}}</p>
          <p class="sub-title" v-for="(item,i) in item.items" :key="i">
            {{item.title}}
          </p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
      return {
          menuData:[
            {
              title:'员工管理',
              items:[
                {
                  title:'新增员工',
                  itmes:[]
                }
              ]
            },
            {
              title:'商品管理',
              items:[
                {
                  title:'商品列表',
                  itmes:[]
                },
                {
                  title:'新增商品',
                  itmes:[]
                },
                {
                  title:'删除商品',
                  itmes:[]
                }
              ]
            },
            {
              title:'订单管理',
              items:[
                {
                  title:'订单列表',
                  itmes:[]
                },
                {
                  title:'开单',
                  itmes:[]
                },
                {
                  title:'关闭订单',
                  itmes:[]
                }
              ]
            }
          ]
      }
  }
}
</script>

<style lang="less" scoped>
  .sider-bar {
    display: inline-block;
    height: 100%;
    padding: 20px 20px 0 0;  
    background-color: #20A0FF;
    line-height: 50px;
    .main-title {
      padding-left: 20px;
      font-size: 16px;
    }
    .sub-title {
      font-size: 14px;
      padding-left: 28px;
    }
  }
</style>


