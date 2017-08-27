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
            <span class="input-label f-fl">会员等级：</span>
            <el-radio-group class="f-fl" v-model="searchData.grade">
              <el-radio>全部</el-radio>
              <el-radio :label="3">普通会员</el-radio>
              <el-radio :label="6">VIP会员</el-radio>
            </el-radio-group>
          </div>
          <div class="form-group f-cb">
            <span class="input-label f-fl">办理时间：</span>
            <el-radio-group class="f-fl f-cb" v-model="searchData.data">
              <el-radio class="f-fl" label='all'>全部</el-radio>
              <el-radio class="f-fl" @click.native.stop="choiceDate">自定义</el-radio>
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
      
      <div class="m-table">
        <el-button type="primary">
          <router-link to="/home/customer/add">新增会员</router-link>
        </el-button>
        <el-table class="m-table" :data="tableData" stripe style="width: 100%">
          <el-table-column label="姓名" width="120">
            <template scope="scope">
              <span class="avatar">{{ scope.row.name.substr(0,1)}}</span>
              <!-- <span v-popover:customerInfo>{{scope.row.name}}</span> -->
              <el-popover placement="bottom-start" trigger="hover">
                <div>
                  <p>年龄：18</p>
                  <p>职业：coder</p>
                </div>
                <span slot="reference" class="s-link">{{scope.row.name}}</span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column width="130" prop="mobile" label="电话">
          </el-table-column>
          <el-table-column width="100" prop="grade" label="会员等级">
          </el-table-column>
          <!-- <el-table-column prop="profession" label="职业">
          </el-table-column> -->
          <el-table-column width="180" prop="orderCount" label="累计订单数">
          
          </el-table-column>
          <el-table-column width="180" prop="moneyCount" label="累计订单金额">
    
          </el-table-column>
          
          <el-table-column width="150" prop="creatTime" label="办理时间">
          </el-table-column>
          <el-table-column prop="staff" label="经办人">
          </el-table-column>
          <el-table-column label="操作" width="200">  
            <template scope="scope">
              <el-button v-modal size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button v-modal size="small" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页模块 -->
      <div class="m-pagination f-fr">
         <!-- <Pagination :pagegationConfig=""></Pagination>  -->
         <el-pagination
          @current-change="handleCurrentChange"
          :current-page="1"
          layout="total, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
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
        name: 'Yiool',
        mobile: '13554407111',
        profession: '上海市普陀区金沙江路 1518 弄',
        moneyCount:'10000',
        orderCount:'2',
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
        staff: 'yg',
        grade:'VIP会员'
      }, {
        name: 'Yiool',
        mobile: '13554407111',
        profession: '上海市普陀区金沙江路 1518 弄',
        moneyCount:'10000',
        orderCount:'2',
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
        staff: 'yg',
        grade:'VIP会员'
      }, {
        name: 'Yiool',
        mobile: '13554407111',
        profession: '上海市普陀区金沙江路 1518 弄',
        moneyCount:'10000',
        orderCount:'2',
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
        staff: 'yg',
        grade:'VIP会员'
      },
      {
        name: 'Yiool',
        mobile: '13554407111',
        profession: '上海市普陀区金沙江路 1518 弄',
        moneyCount:'10000',
        orderCount:'2',
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
        staff: 'yg',
        grade:'VIP会员'
      },
      {
        name: 'Yiool',
        mobile: '13554407111',
        profession: '上海市普陀区金沙江路 1518 弄',
        moneyCount:'10000',
        orderCount:'2',
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
        staff: 'yg',
        grade:'VIP会员'
      }],
      
    }
  },
  components: {
    brandRumb
  },
  methods: {
    handleIconClick: function () {
      // console.log(123);
    },
    handleCurrentChange:function(val){
      console.log(val);
    },
    choiceDate: function (event) {

      console.log(123);
      this.searchData.showDatePicker = true;
    }
  },
  directives:{
    modal:{
      bind: (el)=>{
        el.onmouseenter = function(){
          console.log(1234);
        }
      }
    }
  },
  created(){
    console.log('customer-init');
  },
  mounted(){
    document.body.onclick = ()=>{
      this.searchData.showDatePicker = false;
    }
  },
  activated() {
    this.http('customer','list',{}).then((res)=>{
      console.log(res);
    });
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
  .m-table {
    button {
        a {
          color:#fff;
        }
      }
    .m-table {
      margin-top: 20px;
      .avatar {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
        background-color: #d7d7d7;
        color: #f1f1f1;
      }
      .s-link {
        color:#038ae3;
        cursor: pointer;
      }
    }
  }
  .m-pagination {
    margin:20px 20px 20px 0;
  }
}
</style>

