/*
 * @Author: yigeng 
 * @description: middleware of verify token 
 * @Date: 2017-12-26 15:40:25 
 * @Last Modified by: yigeng
 * @Last Modified time: 2017-12-26 16:27:19
 */

const jwt = require("jsonwebtoken");
const config = require("../config/index.js");

const verifyToken = function(req, res, next) {
  // 从body或query或者header中获取token
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  jwt.verify(token, config.secret, function(err, decode) {
    if (err) {
      //  时间失效的时候 / 伪造的token
      console.log('err---', err);
      res.json({
        data: '登录超时',
        status:　400001
      });
    } else {
      next();
    }
  });
};

module.exports = verifyToken;
