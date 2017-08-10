<template>
  <div>
    <!-- 面包屑导航 -->
    <brand-rumb :links="navLinks"></brand-rumb>
    <div class="windowframe">
      <!-- 查询模块 -->
      <div class="searchModule">
        <div class="search-input">
          <el-input :placeholder="searchData.placeholder" icon="search" v-model="searchData.searchContent" :on-icon-click="handleIconClick">
          </el-input>
        </div>
        <div class="search-condition">
          <div class="form-group f-cb">
            <span class="input-label f-fl">会员等级:</span>
            <el-radio-group class="f-fl" v-model="searchData.grade">
              <el-radio>全部</el-radio>
              <el-radio :label="3">普通会员</el-radio>
              <el-radio :label="6">黄金会员</el-radio>
              <el-radio :label="9">铂金会员</el-radio>
            </el-radio-group>
          </div>
          <div class="form-group f-cb">
            <span class="input-label f-fl">办理时间:</span>
            <el-radio-group class="f-fl f-cb" v-model="searchData.data">
              <el-radio class="f-fl" label='all'>全部</el-radio>
              <el-radio class="f-fl" @click.native="choiceDate">自定义</el-radio>
              <div class="date-picker f-fl" v-if="searchData.showDatePicker">
                <el-date-picker v-model="searchData.startDate" type="date" placeholder="选择起始日期" :picker-options="datePickerConfig">
                </el-date-picker>
                &nbsp;&nbsp;~&nbsp;&nbsp;
                <el-date-picker v-model="searchData.endDate" type="date" placeholder="选择截至日期" :picker-options="datePickerConfig">
                </el-date-picker>
              </div>
            </el-radio-group>
          </div>
        </div>
      </div>
      <!-- 表格模块 -->
      <div>
        <el-button type="primary">
          <router-link to="/home/customer/add">新增会员</router-link>
        </el-button>
        <button @click="add()">按钮</button>
        <!-- TODO: 表格信息收集、表头设计-->
        
      </div>
      <!-- 分页模块 -->
    </div>
  
  </div>
</template>

<script>
import brandRumb from '../../../components/BreadCrumb.vue'
export default {
  data() {
    return {
      navLinks: [
        {
          title: '会员管理',
          path: '/home/customer'
        }, {
          title: '会员列表',
          path: '/home/customer/list'
        }
      ],
      searchData: {
        searchContent: '',
        placeholder: '请输入会员姓名、电话',
        grade: 6,
        data: '',
        startDate: '',
        endDate: '',
        showDatePicker: false
      },
      datePickerConfig: {
        disabledDate(time) {
          return time.getTime() >= Date.now() - 8.64e7;
        }
      },
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
    }
  },
  components: {
    brandRumb
  },
  methods: {
    handleIconClick: function () {
      // console.log(123);
    },
    choiceDate: function (event) {

      console.log(123);
      this.searchData.showDatePicker = true;
    },
    add: function () {
      console.log(new Date());
      this.axios({
        url: 'http://localhost:8080/api/v1/customer/add',
        type: 'get',
        params: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        },
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      })
      this.axios.post('http://localhost:8080/api/v1/customer/add', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }).then((response) => {
        console.log(response);
        console.log(new Date())
      })
    }
  },
  mounted() {
    // console.log(window);
    /*window.onclick = ()=>{
      // console.log(123);
      console.log(this);
      this.searchData.showDatePicker = false;
    }*/
  }
}
</script>

<style lang="less" scoped>
.windowframe {
  .searchModule {
    .search-input {
      width: 300px;
      margin-bottom: 20px;
    }
    .search-condition {
      .input-label {
        margin-right: 10px;
      }
      .form-group {
        margin-bottom: 25px;
      }
      .date-picker {
        margin-top: -10px;
        margin-left: 20px;
      }
    }
  }
}
</style>

