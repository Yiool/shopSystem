let mongoose = require('../controller/mongoose'),
    Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    username: { type: String }, //用户账号
    mobile: { type: String, unique: true, required: true }, //密码
    gender: { type: String }, //性别  0 -男  1- 女
    profession: { type: String },
    grade: { type: String, default: '0' }, //会员等级 0 -普通会员 1- VIP会员
    age: { type: String }, //年龄
    PD: { type: String }, //瞳距
    leftEye: { type: Object }, //左眼验光数据
    rightEye: { type: Object }, //右眼验光数据
    mirrorBracketBrand: { type: String }, //镜架品牌
    mirrorBracketType: { type: String }, //镜架类型
    opticBrand: { type: String }, //镜片品牌
    opticType: { type: String }, //镜片类型
    remark: { type: String }, //备注信息
    orderCount: { type: Number },
    orderMoneyConut: { type: Number },
    createTime: { type: Date, default: Date.now() },
    staff: { type: String }
});

module.exports = mongoose.model('Customer', CustomerSchema);