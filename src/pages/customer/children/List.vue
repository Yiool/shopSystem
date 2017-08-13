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
        <!-- <button @click="add()">按钮</button> -->
        <!-- TODO: 表格信息收集、表头设计-->
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column label="姓名">
            <template scope="scope">
              <span>{{ scope.row.name.slice(1)}}</span>
              <!-- <span>{{scope.row.name}}</span> -->
            </template>
          </el-table-column>
          <el-table-column prop="mobile" label="电话">
          </el-table-column>
          <el-table-column prop="profession" label="职业">
          </el-table-column>
          <el-table-column label="左眼视力">
            <template scope="scope">
              <!-- {{scope.row.leftEyes.DS}} -->
              <span style="margin-left: 10px">{{ scope.row.leftEyes.DS }}</span>
              <span style="margin-left: 10px">{{ scope.row.leftEyes.DC }}</span>
              <span style="margin-left: 10px">{{ scope.row.leftEyes.AX }}</span>
              <span style="margin-left: 10px">{{ scope.row.leftEyes.VA }}</span>
            </template>
          </el-table-column>
          <el-table-column label="右眼视力">
            <template scope="scope">
              {{scope.row.rightEyes.DS}}
              <!-- <span style="margin-left: 10px">{{ scope.row.rightEyes.DS }}</span>
                <span style="margin-left: 10px">{{ scope.row.rightEyes.DC }}</span>
                <span style="margin-left: 10px">{{ scope.row.rightEyes.AX }}</span>
                <span style="margin-left: 10px">{{ scope.row.rightEyes.VA }}</span> -->
            </template>
          </el-table-column>
          <el-table-column prop="pd" label="PD">
          </el-table-column>
          <el-table-column prop="add" label="ADD">
          </el-table-column>
          <el-table-column prop="creatTime" label="办理时间">
          </el-table-column>
          <el-table-column prop="staff" label="经办人">
          </el-table-column>
          <el-table-column label="操作" width="">
            <template scope="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
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
      },
      tableData: [{
        name: '王小虎',
        mobile: '13554407111',
        profession: '上海市普陀区金沙江路 1518 弄',
        leftEyes: {
          DS: '+1.25',
          DC: '-1.25',
          AX: '85',
          VA: '0.9'
        },
        rightEyes: {
          DS: '+1.25',
          DC: '-1.25',
          AX: '85',
          VA: '0.9'
        },
        pd: '64',
        ADD: '32.5',
        creatTime: '2017-08-13',
        staff: 'yg'
      }, {
        name: '王小虎',
        mobile: '13554407111',
        profession: '上海市普陀区金沙江路 1518 弄',
        leftEyes: {
          DS: '+1.25',
          DC: '-1.25',
          AX: '85',
          VA: '0.9'
        },
        rightEyes: {
          DS: '+1.25',
          DC: '-1.25',
          AX: '85',
          VA: '0.9'
        },
        pd: '64',
        ADD: '32.5',
        creatTime: '2017-08-13',
        staff: 'yg'
      }, {
        name: '王小虎',
        mobile: '13554407111',
        profession: '上海市普陀区金沙江路 1518 弄',
        leftEyes: {
          DS: '+1.25',
          DC: '-1.25',
          AX: '85',
          VA: '0.9'
        },
        rightEyes: {
          DS: '+1.25',
          DC: '-1.25',
          AX: '85',
          VA: '0.9'
        },
        pd: '64',
        ADD: '32.5',
        creatTime: '2017-08-13',
        staff: 'yg'
      }],
      progress: 0
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
      /* console.log(new Date());
      this.axios({
        url: 'http://localhost:8080/api/v1/customer/1',
        type: 'get',
        params: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }).then(function(res){
        console.log(res)
      }) */
      let _this = this;
      setTimeout(() => {
        setInterval(() => {
          _this.progress++;
        }, 1000)
      }, 2000)
      this.http('customer', 'list', { id: 1 }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      })
      /* this.axios.post('http://localhost:8080/api/v1/customer/add', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }).then((response) => {
        console.log(response);
        console.log(new Date())
      }) */
    }
  },
  activated() {
    this.http('customer','list',{page:1,pagesize:1,t:new Date().getTime()});
    // console.log(window);
    /*window.onclick = ()=>{
      // console.log(123);
      console.log(this);
      this.searchData.showDatePicker = false;
    }*/

  },
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

