var http=require('http')
//创建实例
var server=http.createServer();

// //监听请求
// server.on('request',function(){
//   console.log('accept')
// })
// //启动服务器于本机3000端口
// server.listen(3000,function () {
//   console.log('服务器启动成功')
// })

http.createServer().on('request',function(req,res){
  console.log('someone is visiting'+req.url)
  //通过对于req.url做出判断，来给客户端反馈，初步方法
  //res.write('what')
  //必须加res.end,告诉客户端响应完成
  //res.end()
  var product=[
    {name:'真的好麻烦啊'},
    {buy:111}
   ]
  res.setHeader('Content-Type','text/plain;charset=utf-8')
  res.end(JSON.stringify(product))
  //res.end() 内只能放入二进制和字符串,且中文会乱码
  //若要返回json，用JSON.stringify(product)


  //按照不同的请求地址，返回不同的响应:if else 多重判断
  // var url=req.url;(以/开头)
  // if(url==='/'){
  //   res.end("index")
  // }else if(url==='/login'){
  //  res.end("登陆")
  // } else{
  //   res.end('404')
  // }

  
}).listen(3000,function(){
  console.log('link start')
})