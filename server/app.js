const http = require('http')
const express = require('express')
const router = require('./router/router')
const bodyParser = require('body-parser')
const mongoose = require('./controller/mongoose')
let app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

let server = require('http').createServer(app);
//指定静态文件的位置
// app.use('/', express.static(__dirname + '/public'));
//监听端口号
/*var pageUrl = 'http://www.jianshu.com/';

http.get(pageUrl, function(res) {
    var html = '';
    res.on('data', function(data) {
        html += data;
    });
    res.on('end', function() {
        console.log(html);
    });
});*/

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

app.post('/api/v1/login',function(req,res){
    console.log(req.body);
});
app.use('/api/v1', router);
/* 路径未匹配到时 */
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


server.listen(8080);
console.log('create a local server')