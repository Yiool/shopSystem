const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })


/**
 * customer post请求----添加一条数据
 */
router.post('/', function(req, res) {
    /* 解析req参数 */
    //1.username
    let username = req.body.t;
    //2.password
    let password = req.body.password;
    // console.log(req.body)
    res.json({ data: username, status: 0 });
});

/**
 * get请求---- 返回所有custoer信息
 */
router.get('/', function(req, res) {
    /* 解析req参数 */
    //1. 页码page
    //2. 每页条数pagesize
    //3. 会员等级 grade
    //4. 创建时间(Unix时间戳) createtime
    //5. 排序
    // console.log(req.body);
    console.log(req)
    res.send(req.body);
});

router.delete('/', function(req, res) {
    console.log(req.body);
    res.send('delete a cutomer');
});


module.exports = router;