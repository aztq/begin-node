const express = require('express')
const app =express()

const router =require('./router')   //导入

//以/public可以访问public文件夹下的内容
app.use('/public',express.static('./public'))  

app.use(router)   //挂载

app.listen(3000, () =>console.log(11))  //监听端口
