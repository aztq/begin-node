var fs =require('fs')
var http =require('http')

var server=http.createServer();

server.on('request',function (req,res) {

  var url =req.url;
  if(url==='/'){

    fs.readFile('./渲染.html',function(err,data){
      if(err){
       res.setHeader('Content-Type','text/plain;charset=utf-8')
       res.end('页面找不到')
       }else{
          res.setHeader('Content-Type','text/html;charset=utf-8')
          //可以通过.toString转为字符串
          //content-type 类别:   www.tool.oschina.net/
          res.end(data)
         }
    })
  }
})

server.listen(3000,function(){
   console.log('link start')
})