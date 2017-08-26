<template>
  <div>
    <brand-rumb :links="navLinks"></brand-rumb>
    <div class="m-form">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="姓名：">
          <el-input class="input-w-180" v-model="form.name" placeholder="请输入会员姓名"></el-input>
        </el-form-item>
        <el-form-item label="职业：">
          <el-input class="input-w-180" v-model="form.profession" placeholder="请输入会员职业"></el-input>
          <!--  <el-select v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>  -->
        </el-form-item>
        <el-form-item label="电话：" prop="mobile">
          <el-input class="input-w-180" v-model="form.mobile" placeholder="请输入会员电话"></el-input>
          <!-- <el-col :span="11">
                      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col> -->
        </el-form-item>
        <el-form-item label="左眼视力">
        </el-form-item>
        <el-form-item label="右眼视力">

        </el-form-item>
        <el-form-item label="PD" prop="pd">
          <el-input class="input-w-180" v-model="form.pd" placeholder="请输入PD"></el-input>
        </el-form-item>
        <el-form-item label="ADD" prop="add">
          <el-input class="input-w-180" v-model="form.add" placeholder="请输入ADD"></el-input>
        </el-form-item>
        <el-form-item label="镜架" prop="镜架">
          <el-input class="input-w-180" v-model="form.mirrorBracket" placeholder="请输入镜架品牌"></el-input>
        </el-form-item>
        <el-form-item label="镜片" prop="镜片">
          <el-input class="input-w-180" v-model="form.optic" placeholder="请输入镜片品牌"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input class="input-w-180" v-model="form.remark" placeholder="请输入备注"></el-input>
        </el-form-item>
        <el-form-item>
<<<<<<< HEAD
          <el-button type="primary" @click="onSubmit()">立即创建</el-button>
          <el-button type="primary" @click="goBack()">返&nbsp;&nbsp;&nbsp;&nbsp;回</el-button>
=======
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button type="primary" @click="goBack()">取消</el-button>
>>>>>>> 1868923cf45cc41eff507e770e97d4f2ed8f2ae8
        </el-form-item>
      </el-form>
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
        }, {
          title: '新增会员',
          path: '/home/customer/add'
        }
      ],
      form: {
        name: '',
        profession: '',
        mobile: '',
        pd: '',
        add: '',
        mirrorBracket: '',
        optic: '',
        remark: ''
      },
      rules: {
        mobile: [
          {  required: true, message: '请输入11位电话号码', trigger: 'blur' }
        ],
        pd: [
          {
            required: true, message: '请输入pd', trigger: 'blur'
          }
        ],
        add: [
          {
            required: true, message: '请输入add', trigger: 'blur'
          }
        ],
      }
    }
  },
  components: {
    brandRumb
  },
  methods: {
    onSubmit: function () {
      this.http('customer','add',this.form).then((res)=>{
        console.log(res);
        this.$message({
          message: '添加成功',
          type: 'success'
        }).catch((err)=>{
          this.$message({
          message: 'error',
          type: 'success'
        });
        });
      })
    },
    goBack:function(){
<<<<<<< HEAD
      this.$router.push({path:'/home/customer/list'})
=======
      console.log(this);
      this.$router.push({path:'/home/customer/list'});
>>>>>>> 1868923cf45cc41eff507e770e97d4f2ed8f2ae8
    }
  }
}
</script>

<style lang="less" scoped>
.m-form {
  padding: 20px;
  padding-left: 30px;
  .input-w-180 {
    width: 180px;
  }
}
</style>

