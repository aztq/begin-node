//node的核心模块，功能为对文件进行操作
var fs=require('fs');

//写入
fs.writeFile('./data.txt','asdasda',err=>{console.log(err)})

//读取
fs.readFile('./data.txt',function(err,data){
  if(err){
    console('defeat')
  } else{
    console.log(data)             //十六进制，需转化
    console.log(data.toString())  //转为字符串
  }
})