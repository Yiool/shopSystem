<template>
  <div>
    <brand-rumb :links="navLinks"></brand-rumb>
    <div class="steps">
      <el-steps :space="200" :active="step" finish-status="success">
        <el-step title="步骤 1" description="填写会员基本信息"></el-step>
        <el-step title="步骤 2" description="填写验光信息"></el-step>
        <el-step title="步骤 3" description="填写会员购买商品信息(可跳过)"></el-step>
      </el-steps>
    </div>
    <div class="m-form">
      <div v-if="step === 0">
        <el-form ref="form" :model="form" :rules="rules" label-width="92px">
          <el-form-item label="电话：" prop="mobile">
            <el-input class="input-w-180" v-model="form.mobile" placeholder="请输入会员电话"></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input class="input-w-180" v-model="form.username" placeholder="请输入会员姓名"></el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio-group v-model="form.gender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="年龄：">
            <el-input class="input-w-180" v-model="form.age" placeholder="请输入会员年龄"></el-input>
          </el-form-item>
          <el-form-item label="职业：">
            <el-input class="input-w-180" v-model="form.profession" placeholder="请输入会员职业"></el-input>
          </el-form-item>
          <el-form-item label="会员类型：" prop="grade">
            <el-select class="input-w-180" placeholder="请选择会员类型" v-model="form.grade">
              <el-option label="普通会员" value="0"></el-option>
              <el-option label="vip会员" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="toSecondStep('form')">下一步</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-if="step === 1">
        <el-form ref="form" :inline="true" :model="form" :rules="rules" label-width="85px">
          <el-form-item label="瞳距：" >
            <el-input class="input-w-180" v-model="form.PD" placeholder="请输入"></el-input>
          </el-form-item>
          <h3>左眼视力</h3>
          <div class="left-eye">
            <el-form-item label="球镜：">
              <el-input class="input-w-180" v-model="form.leftEye.DS" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="柱镜：">
              <el-input class="input-w-180" v-model="form.leftEye.DC" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="轴位：">
              <el-input class="input-w-180" v-model="form.leftEye.AX" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="瞳高：">
              <el-input class="input-w-180" v-model="form.leftEye.HT" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="下加光：">
              <el-input class="input-w-180" v-model="form.leftEye.ADD" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="矫正视力：">
              <el-input class="input-w-180" v-model="form.leftEye.VA" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="棱镜：">
              <el-input class="input-w-180" v-model="form.leftEye.LJ" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="基底：">
              <el-input class="input-w-180" v-model="form.leftEye.BD" placeholder="请输入"></el-input>
            </el-form-item>
          </div>


          <h3>右眼视力</h3>
          <div class="right-eye">
            <el-form-item label="球镜：">
              <el-input class="input-w-180" v-model="form.rightEye.DS" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="柱镜：">
              <el-input class="input-w-180" v-model="form.rightEye.DC" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="轴位：">
              <el-input class="input-w-180" v-model="form.rightEye.AX" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="瞳高：">
              <el-input class="input-w-180" v-model="form.rightEye.HT" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="下加光：">
              <el-input class="input-w-180" v-model="form.rightEye.ADD" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="矫正视力：">
              <el-input class="input-w-180" v-model="form.rightEye.VA" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="棱镜：">
              <el-input class="input-w-180" v-model="form.rightEye.LJ" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="基底：">
              <el-input class="input-w-180" v-model="form.rightEye.BD" placeholder="请输入"></el-input>
            </el-form-item>
          </div>
          <!-- <el-form-item label="左眼视力">
          </el-form-item>
          <el-form-item label="右眼视力">
          </el-form-item> -->

          <!-- <el-form-item label="ADD" prop="add">
            <el-input class="input-w-180" v-model="form.add" placeholder="请输入ADD"></el-input>
          </el-form-item> -->
          <el-form-item class="form-footer">
            <el-button type="primary" @click="step = 0">上一步</el-button>
            <el-button type="primary" @click="toThirdStep('form')">下一步</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-if="step === 2">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="镜架：" prop="镜架">
            <el-select placeholder="请选择品牌" v-model="form.mirrorBracketBrand">
              <el-option label="品牌一" value="镜架品牌1"></el-option>
              <el-option label="品牌二" value="镜架品牌2"></el-option>
            </el-select>
            <el-select placeholder="请选择型号" v-model="form.mirrorBracketType">
              <el-option label="型号一" value="镜架型号1"></el-option>
              <el-option label="型号二" value="镜架型号2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="镜片：" prop="镜片">
            <el-select placeholder="请选择品牌" v-model="form.opticBrand">
              <el-option label="品牌一" value="镜片品牌1"></el-option>
              <el-option label="品牌二" value="镜片品牌2"></el-option>
            </el-select>
            <el-select placeholder="请选择型号" v-model="form.opticType">
              <el-option label="型号一" value="镜片型号1"></el-option>
              <el-option label="型号二" value="镜片型号1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注：">
            <el-input class="input-w-180" v-model="form.remark" placeholder="请输入备注"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="step = 1">上一步</el-button>
            <el-button type="primary" @click="onSubmit()">立即创建</el-button>
            <el-button type="primary" @click="submitAndCreatOrder()">创建并开单</el-button>
            <el-button type="primary" @click="goBack()">返&nbsp;&nbsp;&nbsp;&nbsp;回</el-button>
        </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import brandRumb from '../../../components/BreadCrumb.vue'
export default {
  data() {
    return {
      // 面包屑导航路径信息
      navLinks: [
        {
          title: '会员管理',
          path: '/home/customer'
        }, {
          title: '会员列表',
          path: '/home/customer/list/1'
        }, {
          title: '新增会员',
          path: '/home/customer/add'
        }
      ],
      step:0,  // 步骤条状态 默认为第一步
      //表单初始化数据
      form: {
        //步骤1数据
        username: '',
        gender:'',
        age:'',
        profession: '',
        mobile: '',
        grade:'0',
        //步骤2数据
        PD:'',
        leftEye:{
          DS:'', //球镜
          DC:'', //柱镜
          AX:'', //轴位
          VA:'', //视力
          ADD:'',//下加光
          BD:'', //基底
          HT:'', //瞳高
          LJ:'', // 棱镜
        },
        rightEye:{
          DS:'', //球镜
          DC:'', //柱镜
          AX:'', //轴位
          VA:'', //视力
          ADD:'',//下加光
          BD:'', //基底
          HT:'', //瞳高
          LJ:'', // 棱镜
        },
        //步骤3数据
        mirrorBracketBrand: '',  //镜架品牌
        mirrorBracketType:'',    //镜架类型
        opticBrand: '',          //镜片品牌
        opticType:'',            //镜片类型
        remark: '',              //备注信息
        staff:''
      },
      rules: {
        mobile: [
          {  required: true, message: '请输入11位电话号码', trigger: 'blur' }
        ],
        grade:[
          {  required: true, message: '请选择会员类型', trigger: 'blur' }
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
    toSecondStep:function(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.step = 1;
        } else {
          return false;
        }
      });
    },
    toThirdStep:function(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.step = 2;
        } else {
          return false;
        }
      });
    },
    onSubmit: function () {
      console.log(this.$destroy);
      this.http('customer','add',this.form).then((res)=>{
        console.log(res);
        this.$message({
          message: '添加成功',
          type: 'success'
        })
      }).catch((err)=>{
          this.$message({
            message: 'error',
            type: 'success'
          });
        });
    },
    submitAndCreatOrder:function(){
      this.saveData(()=>{
        this.$router.push({path:'/home/order/add'});
      })
    },
    goBack:function(){
      console.log(this);
      this.$destroy();
      this.$router.push({path:'/home/customer/list/1'});
    },
    saveData:function(callBack){
      this.http('customer','add',this.form).then((res)=>{
        let data = res.data;
        if (data.status == 0) {
          callBack && callBack();
        }else {
          this.$message({
            message: data.message,
            type: 'success'
          });
        }
      }).catch((err)=>{
        this.$message({
          message: 'error',
          type: 'success'
        });
      })
    }
  },
  created(){
    console.log('init');
  },
  activated(){
    console.log(this.step);
    // this.step = 0;
  },
  destroyed(){
    console.log('销毁');
  }
}
</script>

<style lang="less" scoped>

.steps {
  padding-left: 50px;
  padding-top: 20px;
}
.m-form {
  padding: 20px;
  padding-left: 30px;
  .form-footer {
    margin-top: 20px ;
    padding-left: 85px;
    text-align: center;
  }
  .input-w-180 {
    width: 180px;
  }
  h3 {
    margin:10px 0 20px 20px;
    padding-left: 15px;
    line-height: 20px;
    border-left: 3px solid #20A0FF;
  }
  .right-eye {
    border-bottom: 2px solid #eee;
  }
}
</style>

