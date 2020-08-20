const express = require('express');
const mysql = require('mysql');
const request = require('request');
const cors = require('cors');//跨域
const bodyParser = require('body-parser');//post请求
const app = express();//创建服务
app.listen(3000, () => console.log('服务启动'));


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())//json解析
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'ordersystem',
})
connection.connect();
var selectSql = 'select * from admin';
app.use(cors({
    origin :["http://localhost:8080"],//允许该域名下的请求
    method : ['GET','POST'],//允许的类型
    alloweHeaders : ['Conten-Type','Authorization'] //请求头
}));
app.get('/User', (req, res) => {
    // 获取所有的用户
    connection.query('select * from admin', function (err, rows, fields) {
        if (err) {
            throw err
        }
        res.json(rows);
    })
});
app.get('/Tea',(req,res) => {
    connection.query('select * from tea', function (err, rows, fields) {
        if (err) {
            throw err
        }
        res.json(rows);
    })
})
app.get('/TeaSelect',(req,res) => {
    connection.query('select * from teaselect', function (err, rows, fields) {
        if (err) {
            throw err
        }
        res.json(rows);
    })
})
app.get('/Sugarice',(req,res) => {
    connection.query('select * from sugarice', function (err, rows, fields) {
        if (err) {
            throw err
        }
        res.json(rows);
    })
})
app.post('/Order',(res,req)=>{
    console.log(JSON.stringify(req.body));
})