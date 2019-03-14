var http= require('http')
var fs= require('fs')

http.createServer().on('request',
  function(req,res){
    var url =req.url
    var root='D:/show'
    if(req){
      fs.readFile(root+url,function(err,data){
       if(err){
        res.end('404')
      }else{
        res.end(data)
        // console.log('link start')
      }
    })
  }
  }
).listen(3000,()=>console.log('link start'))





//http.createServer().on('request',
//  function(req,res){
//    var url =req.url
//    var root='D:/show'
//    if(req){
//     if(url==='/a.txt'){
//      fs.readFile(root+'/a.txt',function(err,data){
//       if(err){
//        res.end('404')
//        
//      }else{
//        res.end(data)
//        // console.log('link start')
//      }
//    })
//  }
//  if(url==='/c.html'){
//    fs.readFile(root+'/c.html',function(err,data){
//      if(err){
//        res.end('404')
//      }else{
//        res.end(data)
//      }
//    })
//  }
//  }
//  }
//).listen(3000,()=>console.log('link start'))