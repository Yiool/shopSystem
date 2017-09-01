const http = require('http')
const express = require('express');
const router = require('./customer');
const MongoClient = require('mongodb').MongoClient;

const bodyParser = require('body-parser');
//连接test数据库
/* var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, (err,db) => {
    console.log('连接成功',db);
    db.close();
}); */
var app = express();

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
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

app.use('/api/v1', router);
/* 路径未匹配到时 */
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


server.listen(8080);
console.log('create a local server')