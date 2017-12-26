const http = require('http')
const express = require('express')
const router = require('./router/router')
const bodyParser = require('body-parser')
const mongoose = require('./controller/mongoose')
const session = require('express-session');
const cookieParser = require('cookie-parser')
const chalk = require('chalk');
const morgan = require('morgan');
// let checkSession = require('./controller/checkSession')
let app = express();
// app.use(checkSession);
app.use(session({
    name: 'shop',
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 30
    },
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())
app.use(morgan('dev'));

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
    res.header("Access-Control-Allow-Origin", 'http://localhost:9099');
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }

})


app.use('/api/v1', router);
/* 路径未匹配到时 */
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


server.listen(8088);
console.log('create a local server at: ' + chalk.blue.underline.bold(8088))