let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
  // 用户userId
  userId: Number,
  // 用户名就是手机号
  userTel: String,
  // 用户密码
  userPass: String,
  // 个性签名
  sign: String,
  // 昵称
  nickName: String,
  // 性别 0 女  1  男
  sex: Number,
  // 邮箱
  email: String,
  // 头像
  avatar: String,
  // 注册时间
  createTime: String,
  // 最后一次登录的时间
  lastLoginTime: String
});

// 输出一个用户集合
module.exports = mongoose.model('user', userSchema);