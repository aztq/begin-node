var express =require("express")

var app = express()

//开放静态资源
app.use('/public',express.static('./public')) 

//请求 /时，给出的反馈 
app.get('/',function(req,res){
  res.send('sasdasasytuyuy')
})

app.listen("3000",function(){
  console.log('run')
})