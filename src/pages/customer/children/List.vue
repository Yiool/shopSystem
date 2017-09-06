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
              <el-radio :label="0">全部</el-radio>
              <el-radio :label="3">普通会员</el-radio>
              <el-radio :label="6">VIP会员</el-radio>
            </el-radio-group>
          </div>
          <div class="form-group f-cb">
            <span class="input-label f-fl">办理时间：</span>
            <el-radio-group class="f-fl f-cb" v-model="searchData.data">
              <el-radio class="f-fl" :label='0'>全部</el-radio>
              <el-radio class="f-fl" :label='1' @click.native.stop="choiceDate">自定义</el-radio>
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
        <el-button type="primary" v-permission:customer:add>
          <router-link to="/home/customer/add">新增会员</router-link>
        </el-button>
        <el-table class="m-table" :data="tableData" stripe style="width: 100%">
          <el-table-column label="姓名" width="120">
            <template scope="scope">
              <span class="avatar">{{ scope.row.username.substr(0,1)}}</span>
              <!-- <span v-popover:customerInfo>{{scope.row.name}}</span> -->
              <el-popover placement="bottom-start" trigger="hover">
                <div>
                  <p>年龄：
                    <span>{{scope.row.age}}</span>
                    <span>{{scope.row.gender }}</span>
                  </p>
                  <p>职业：
                    <span>{{scope.row.profession}}</span>
                  </p>
                  <p>会员等级：
                    <span>{{scope.row.grade | formatStatus('gradeType')}}</span>
                  </p>
                </div>
                <span slot="reference" class="s-link">{{scope.row.username}}</span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column width="130" prop="mobile" label="电话">
          </el-table-column>
          <el-table-column width="100" label="会员等级">
            <template scope="scope">
              <span>{{scope.row.grade | formatStatus('gradeType')}}</span>
            </template>
          </el-table-column>
          <!-- <el-table-column prop="profession" label="职业">
            </el-table-column> -->
          <el-table-column width="180" prop="orderCount" label="累计订单数">

          </el-table-column>
          <el-table-column width="180" prop="orderMoneyConut" label="累计订单金额">

          </el-table-column>

          <el-table-column width="150" label="办理时间" prop="createTime">
            <template scope="scope">
              <!-- <span>{{new Date(scope.row.createTime*1).toLocaleString()}}</span> -->
              <span>{{scope.row.createTime | formatDate}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="staff" label="经办人">
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template scope="scope">
              <el-button v-permission:customer:edit size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button v-permission:customer:detail size="small" @click="handleDetail(scope.$index, scope.row)">详情</el-button>
              <el-button v-permission:customer:delete size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页模块 -->
      <div class="m-pagination f-fr">
        <!-- <Pagination :pagegationConfig=""></Pagination>  -->
        <el-pagination @current-change="handleCurrentChange" :current-page="1" layout="total, prev, pager, next, jumper" :total="totalCount">
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
      loading: true,
      navLinks: [
        {
          title: '会员管理',
          path: '/home/customer'
        }, {
          title: '会员列表',
          path: '/home/customer/list/1'
        }
      ],
      searchData: {
        searchContent: '',
        placeholder: '请输入会员姓名、电话',
        grade: 0,
        data: 0,
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
      tableData: [],
      totalCount: 0
    }
  },
  components: {
    brandRumb
  },
  methods: {
    handleIconClick: function() {
      // console.log(123);
    },
    handleCurrentChange: function(val) {
      console.log(val);
      this.$router.push('/home/customer/' + val);
    },
    choiceDate: function(event) {
      console.log(123);
      this.searchData.showDatePicker = true;
    },
    handleDelete: function(index, item) {
      console.log(index, item);
      let params = { _id: item._id }
      this.http('customer', 'delete', params).then((res) => {
        console.log(res.data);
        if(res.data.status == 0){
          this.getList();
        }
      });
    },
    handleEdit:function(index,item){},
    handleDetail:function(index,item){},
    getList: function() {
      console.log(this.$route);
      let currentParams = this.$route.params;
      currentParams.pageSize = 10;
      this.http('customer', 'list', currentParams).then((res) => {
        let data = res.data;
        this.tableData = data.data;
        /* _.forEach(this.tableData,function(v) {
          v.createTime = new Date(v.createTime*1).toLocaleString();
        }); */
        this.totalCount = data.totalCount;
      }).catch((err) => {
        console.log(err.message);
      });
    }
  },
  directives: {
    modal: {
      bind: (el) => {
        el.onmouseenter = function() {
          console.log(1234);
        }
      }
    }
  },
  created() {
    console.log('customer-init');
  },
  mounted() {

  },
  activated() {
      this.getList();
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
        color: #fff;
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
        color: #038ae3;
        cursor: pointer;
      }
    }
  }
  .m-pagination {
    margin: 20px 20px 20px 0;
  }
}
</style>

