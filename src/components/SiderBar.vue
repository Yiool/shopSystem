<template>
  <div class="sider-bar">
    <ul v-if="showFullMenu">
      <!--<span class="toggle-btn">切换</span>-->
      <li v-for="(item,i) in menuData" :key="i">
        <h3 class="main-title" @click="showSubTitle(i)">{{item.title}}</h3>
        <div class="sub-title" v-show="item.showSubTitle">
          <p v-for="(item,i) in item.subTitles" :key="i">
            {{item.title}}
          </p>
        </div>
      </li>
    </ul>
    <ul v-if="!showFullMenu">
      <!--<span>切换</span>-->
      <li v-for="(item,i) in menuData" :key="i">
        <h3 class="main-title" @click="showSubTitle(i)">{{item.title}}</h3>
        <div class="sub-title" v-show="item.showSubTitle">
          <p v-for="(item,i) in item.subTitles" :key="i">
            {{item.title}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          title: '员工管理',
          showSubTitle: false,
          itemIcon: '',
          subTitles: [
            {
              title: '新增员工',
              itmes: []
            }
          ]
        },
        {
          title: '商品管理',
          showSubTitle: false,
          itemIcon: '',
          subTitles: [
            {
              title: '商品列表',
              itmes: []
            },
            {
              title: '新增商品',
              itmes: []
            },
            {
              title: '删除商品',
              itmes: []
            }
          ]
        },
        {
          title: '订单管理',
          showSubTitle: false,
          itemIcon: '',
          subTitles: [
            {
              title: '订单列表',
              itmes: []
            },
            {
              title: '开单',
              itmes: []
            },
            {
              title: '关闭订单',
              itmes: []
            }
          ]
        }
      ],
      showFullMenu: true

    }
  },
  methods: {
    showSubTitle: function (i) {
      this.menuData[i].showSubTitle = !this.menuData[i].showSubTitle;
    },
    toggleMenu: function () {
      this.showFullMenu = !this.showFullMenu;
    }
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
.sider-bar {
  display: inline-block;
  // height: 100%;
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
}
</style>


