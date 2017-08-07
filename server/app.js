var http = require('http')
var express = require('express');
var MongoClient = require('mongodb').MongoClient;

//连接test数据库
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, (err,db) => {
    console.log('连接成功');
    db.close();
});
var app = express();


var server = require('http').createServer(app);
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
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

app.post('/', function(req, res, next) {
    // console.log(req, res);
    next();
})

app.post('/', function(req, res, next) {
    console.log(req);
    res.send({
        code: 0,
        msg: 'ok',
        data: {
            name: 'yg',
            age: 18
        }
    })
})

server.listen(8080);
console.log('create a local server')