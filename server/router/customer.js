const express = require("express");
const router = express.Router();
let sendVerificationCode = require("../controller/sendMessage");
let Customer = require("../model/customerModel");
let _ = require("lodash");
let checkSession = require("../controller/checkSession");
const config = require("../config/index.js");
const jwt = require("jsonwebtoken");
const verifyToken = require("../controller/verifyToken.js");

/**
 * customer post请求----添加一条数据
 */
router.post("/", verifyToken, function(req, res) {
  /* 解析req参数 */
  // console.log(req.body);
  let data = req.body;
  // _.omit(newData,)
  let newData = _.omit(data, "t");
  Customer.create(newData, function(err, doc) {
    if (!err) {
      res.json({
        data: "添加成功",
        status: 0
      });
    } else {
      res.json({
        data: "添加失败",
        status: 1
      });
    }
  });
});

/**
 * get请求---- 返回所有custoer信息
 */
router.get("/", verifyToken, function(req, res) {
  /* 解析req参数 */
  //1. 页码page
  //2. 每页条数pagesize
  //3. 会员等级 grade
  //4. 创建时间(Unix时间戳) createtime
  //5. 排序
  //   var token = req.body.token || req.query.token || req.headers["x-access-token"]; // 从body或query或者header中获取token
  /* jwt.verify(token, config.secret, function(err, decode) {
    if (err) {
      //  时间失效的时候/ 伪造的token
      res.json({ err: err });
    
    } else {
      req.decode = decode;
      console.log("====", decode.msg); // today  is  a  good  day
      //   next();
      
    }
  }); */

  let page = req.query.page * 1 || 1; //第几页 默认第一页
  let pageSize = req.query.pageSize * 1 || 10; //每页多少条,默认10条
  let limit = pageSize;
  let skip = (page - 1) * pageSize;
  let totalCount = 0;
  let queryParams = _.omit(req.query, "t", "page", "pageSize", "token");
  Customer.count(queryParams, function(err, count) {
    if (!err) {
      totalCount = count;
      Customer.find(queryParams, function(err, doc) {
        if (!err) {
          res.json({
            data: doc,
            status: 0,
            totalCount: totalCount
          });
        } else {
          res.json({
            data: "error",
            stauts: 1
          });
        }
      })
        .skip(skip)
        .limit(limit);
    }
  });
});

router.delete("/", verifyToken, function(req, res) {
  console.log(req);
  let userid = req.query._id;
  Customer.remove(
    {
      _id: userid
    },
    function(err, doc) {
      if (!err) {
        res.send({
          data: "删除成功",
          status: 0
        });
      } else {
        res.send({
          data: "删除失败",
          status: 1
        });
      }
    }
  );
});

module.exports = router;
