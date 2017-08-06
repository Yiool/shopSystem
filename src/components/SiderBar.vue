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
      <el-submenu index="/home/order">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">订单管理</span>
        </template>
        <el-menu-item index="/home/order/list">订单列表</el-menu-item>
      </el-submenu>
      <el-submenu index="/home/customer">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">会员管理</span>
        </template>
        <el-menu-item index="/home/customer/list">会员列表</el-menu-item>
      </el-submenu>
      <el-submenu index="commodity">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">导航导航&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /*menuData: [
        {
          title: '订单管理',
          itemIcon: '',
          path: '/home/staff/all',
          subTitles: [
            {
              title: '新增员工',
              path: '/home/staff/list',
              itmes: []
            }
          ]
        },
        {
          title: '商品管理',
          showSubTitle: false,
          itemIcon: '',
          path: '/home/commodity/all',
          subTitles: [
            {
              title: '商品列表',
              path: '/home/commodity/list',
              itmes: []
            },
            {
              title: '新增商品',
              path: '/home/commodity/add',
              itmes: []
            },
            {
              title: '删除商品',
              path: '/home/commodity/delete',
              itmes: []
            }
          ]
        },
        {
          title: '订单管理',
          showSubTitle: false,
          itemIcon: '',
          path: '/home/order/all',
          subTitles: [
            {
              title: '订单列表',
              path: '/home/order/list',
              itmes: []
            }
          ]
        }
      ],*/
      isCollapse: true,
      isRouter: true,
      open: true,
      close: false
    }
  },
  methods: {
    /*showSubTitle: function (i) {
      this.menuData[i].showSubTitle = !this.menuData[i].showSubTitle;
    },
    toggleMenu: function () {
      this.showFullMenu = !this.showFullMenu;
    },*/
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


