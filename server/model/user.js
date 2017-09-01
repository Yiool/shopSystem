var mongoose = require('../controller/mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String }, //用户账号
    userpwd: { type: String }, //密码
    role: { type: String },
    userid: { type: String },
    logindate: { type: Date } //最近登录时间
});

module.exports = mongoose.model('User', UserSchema);