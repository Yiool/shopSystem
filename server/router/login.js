const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const config = require("../config/index.js");

// var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({
//   extended: false
// });

router.post("/", function(req, res) {
  /* 解析req参数 */
  //1.username
  //   console.log(req);
  let username = req.body.username;
  //2.password
  let password = req.body.password;

  User.findOne({ username: username }, function(err, doc) {
    // doc 是单个文档
    if (!err) {
      req.session.user = doc;
      // console.log(req.session.user);
      let pwd = doc.password;
      if (pwd === password) {
        const userInfo = {
          username: doc.username,
          password: doc.password
        };
        console.log('type----- ',typeof doc);
        var token = jwt.sign(userInfo, config.secret, {
          expiresIn: config.expires // 设置过期时间
        });
        res.json({
          data: {
            message: "登录成功"
          },
          status: 0,
          token
        });
      } else {
        res.json({
          data: {
            message: "用户名或密码错误"
          },
          status: 1
        });
      }
    } else {
      res.sendStatus(500);
    }
  });

  // console.log(username, password);
  /* User.create({
        username: username,
        userpwd: password,
        role: '0',
        logindate: Date.now()
    }, function(err, user) {
        console.log(user);
        if (!err) {
            res.json({
                data: {
                    name: username,
                    pw: password
                },
                status: 0
            });
        }
    }); */
});

module.exports = router;
