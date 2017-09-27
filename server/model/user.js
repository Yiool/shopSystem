let mongoose = require('../controller/mongoose'),
    Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: { type: String }, //用户账号
    password: { type: String }, //密码
    role: { type: String },
    userid: { type: String },
    logindate: { type: String } //最近登录时间
});

module.exports = mongoose.model('User', UserSchema);