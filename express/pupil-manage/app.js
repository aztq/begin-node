var express = require('express');
var app = express();

var bodyParser =require('body-parser')  //获取post方法的提交数据
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))
// create application/json parser
app.use(bodyParser.json())

var router=require('./router')

//配置art-template,以html后缀文件查询，默认从views文件夹下寻找
app.engine('html', require('express-art-template'));

//挂载路由
app.use(router)


app.listen(3000,()=>console.log('running'))