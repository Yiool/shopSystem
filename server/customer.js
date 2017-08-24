const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


/**
 * customer post请求----添加一条数据
 */
router.post('/customer', function(req, res) {
    /* 解析req参数 */
    //1.username
    let username = req.body.username;
    //2.password
    let password = req.body.password;

    res.json({ data: 'message', status: 0 });
});

/**
 * get请求中没有参数 返回所有custoer信息
 */
router.get('/customer', function(req, res) {
    /* 解析req参数 */
    //1. 页码page
    //2. 每页条数pagesize
    //3. 会员等级 grade
    //4. 创建时间 createtime
    //5. 排序
    console.log(req.body);
    res.send(req.body);
});

/**
 * get请求中含id参数、则返回一条信息
 */
router.get('/customer/:id', function(req, res) {
    /* 解析req参数 */
    console.log(req.params.id);
    res.send('根据id查detail');
});
module.exports = router;