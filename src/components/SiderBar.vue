<template>
  

  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-message"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
</el-menu>
</template>

<script>
export default {
  data() {
    return {
      /*menuData: [
        {
          title: '员工管理',
          showSubTitle: false,
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
      isCollapse: false

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


