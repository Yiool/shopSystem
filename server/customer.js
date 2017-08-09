const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/customer',jsonParser,function(req,res){
  /* 解析req参数 */
  console.log(req.body);
  res.send("messages");
});

module.exports = router;