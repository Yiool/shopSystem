<template>
  <div>
    <!--<el-radio-group v-model="isCollapse" @change="change(isCollapse)" style="margin-bottom: 20px;">
        <el-radio-button :label="open">展开</el-radio-button>
        <el-radio-button :label="close">收起</el-radio-button>
      </el-radio-group>-->
    <el-menu default-active="/home/desktop" :router="isRouter" class="" theme="light" mode="vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="/home/desktop">
        <i class="el-icon-menu"></i>
        <span>工作台</span>
      </el-menu-item>
      <el-submenu v-for="(item,index) in menuData" :index="item.path" :key="index">
        <template slot="title">
          <i :class="item.itemIcon"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <el-menu-item v-if="subItem.isShow" v-for="(subItem,i) in item.subTitles" :index="subItem.path" :key='i'>{{subItem.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          title: '订单管理',
          itemIcon: 'iconfont icon-dingdan',
          path: '/home/order',
          subTitles: [
            {
              title: '订单列表',
              path: '/home/order/list/1',
              isShow:true,
              itmes: [],
            },
            {
              title: '新增订单',
              path: '/home/order/add',
              isShow:false,
              itmes: []
            },
          ]
        },
        {
          title: '会员管理',
          itemIcon: 'iconfont icon-huiyuanguanli',
          path: '/home/customer',
          subTitles: [
            {
              title: '会员列表',
              path: '/home/customer/list/1',
              isShow:true,
              itmes: []
            },
            {
              title: '新增会员',
              path: '/home/customer/add',
              isShow:false,
              itmes: []
            }
          ]
        },
        {
          title: '商品管理',
          itemIcon: 'iconfont icon-shangpinguanli',
          path: '/home/goods',
          subTitles: [
            {
              title: '商品列表',
              path: '/home/goods/list/1',
              isShow:true,
              itmes: []
            },
            {
              title: '新增商品',
              path: '/home/goods/add',
              isShow:false,
              itmes: []
            }
          ]
        },
        {
          title: '财务管理',
          itemIcon: 'iconfont icon-caiwuguanlibaobiao',
          path: '/home/financial',
          subTitles: [
            {
              title: '财务列表',
              path: '/home/financial/list/1',
              isShow:true,
              itmes: []
            },
          ]
        },
        {
          title: '库存管理',
          itemIcon: 'iconfont icon-ccgl-kucunguanli-6',
          path: '/home/inventory',
          subTitles: [
            {
              title: '库存列表',
              path: '/home/inventory/list/1',
              isShow:true,
              itmes: []
            },
          ]
        },
        {
          title: '权限管理',
          itemIcon: 'iconfont icon-shangpinguanli',
          path: '/home/permission',
          subTitles: [
            {
              title: '权限列表',
              path: '/home/permission/list/1',
              isShow:true,
              itmes: []
            },
          ]
        }
      ],
      isCollapse: false,
      isRouter: true,
      open: true,
      close: false
    }
  },
  methods: {
    handleOpen: function (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose: function (key, keyPath) {
      console.log(key, keyPath);
    },
    change: function (v) {
      console.log(v);
    }
  }
}
</script>

<style lang="less" scoped>
/*.sider-bar {
  display: inline-block; // height: 100%;
  padding: 20px 0 0 0; // background-color: #20A0FF;
  line-height: 50px;
  ul {
    position: relative;
    .toggle-btn {
      position: absolute;
      right: 5px;
      margin-bottom: 30px;
    }
    li {
      border-bottom: 1px solid #ccc;
      cursor: pointer;
    }
    .main-title {
      padding: 0 20px;
      font-size: 16px;
      cursor: pointer;
    }
    .sub-title {
      font-size: 14px;
      padding-left: 28px;
    }
  }
}*/
</style>


