const http =require('http')
const fs =require('fs')
const template =require('art-template')

const part =[
  {name:'zz',sentense:'trash',date:'now'},
  {name:'zz',sentense:'trash',date:'now'},
  {name:'zz',sentense:'trash',date:'now'},
  {name:'zz',sentense:'trash',date:'now'}
]

http.createServer((req,res) =>{
  const url = req.url;
  if(url==='/'){
   fs.readFile('./content.html',function(err,data){
    if(err){
      return res.end('lose')
    }else{
      const sample=template.render(data.toString(),{
        part:part
      })
      //console.log(sample)
      res.end(sample)
    }
   })
  }
  else if(url.indexOf('/public')===0){
    //判断请求url的开头是否为/public
    //   /public/xx.html
    //   /public/main.css
    //console.log(url)
    fs.readFile('.'+url,(err,data)=>{  //读取文件时， .  必须加
      console.log(url)
      if(err) console.log('not found')
      else{
        res.end(data)                  //将读取的结果输出
      }
    })
  }
})
.listen(3000,() => console.log('link start'))