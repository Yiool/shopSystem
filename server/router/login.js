const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const User = require('../model/user')

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})


router.post('/', urlencodedParser, function (req, res) {
  /* 解析req参数 */
  //1.username
  //   console.log(req);
  let username = req.body.username;
  //2.password
  let password = req.body.password;
  console.log(username, password);
  User.create({
    username: username,
    userpwd: password,
    role: '0',
    logindate: Date.now()
  }, function (err, user) {
    if (!err) {
      res.json({
        data: {
          name: username,
          pw: password
        },
        status: 0
      });
    }
  });
});

module.exports = router;
