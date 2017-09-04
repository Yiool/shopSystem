let express = require('express')
let customer = require('./customer')
let login = require('./login')
let regist = require('./regist')
let router = express.Router()


router.use('/regist', regist) //注册模块
router.use('/login', login) //登录模块
router.use('/customer', customer) // 会员模块
module.exports = router;