const express = require('express');
const router = express.Router();

router.post('/regist', function(req, res) {
    /* 解析req参数 */
    //1.username
    let username = req.body.username;
    //2.password
    let password = req.body.password;

    res.json({
        data: {
            name: username,
        },
        status: 0
    });
});

module.exports = router