var fs=require('fs')

const express = require('express')
const router =express.Router()

var operation=require('./operation')

router.get('/', function (req, res) {
  operation.find(function(err,students){
    if(err){
      return res.status(500).send('Server error')
    } 
    res.render('front.html',{
      students:students
    })
  })
})
  //fs.readFile('./students.json','utf8',function(err,data){
  //  if(err){
  //    return res.status(500).send('Server error')
  //  }
  //  //console.log(typeof data)     string
  //  //在fs.readFile中的第二个参数为可选参数，加入utf8
  //  //从文件中读取到的数据为字符串，需要转化为对象 
  //  var students=JSON.parse(data).students   
  //
  //  res.render('front.html',{
  //    students:students
  //  })
  //})
//});

router.get('/add', function (req, res) {
  res.render('add.html')
});

router.post('/add', function (req, res) {
  operation.add(req.body,function(err,students){
    if(err){
      return res.status(500).send('Server error')
    }
    //console.log(typeof req.body)   object
    res.redirect('/')
  }) 
});

router.get('/updata',function(req,res){
  //console.log(typeof req.query.id)  类型为字符串，而文件写的是number类型
  operation.findById(parseInt(req.query.id),function(err,message){
    if(err){
      return res.status(500).send('Server error')
    }
    //把对应id的信息查出来，渲染页面
    res.render('updata.html',{
      student:message
    })
  }) 
})

router.post('/updata',function(req,res){
  operation.updata(req.body,function(err){
    if(err){
      return res.status(500).send('Server error')
    }
    res.redirect('/')
  })
})

router.get('/delete',function(req,res){
  res.render('delete.html')
})

router.post('/delete',function(req,res){
  //console.log(req.body)
  operation.delete(req.body,function(err,students){
    if(err){
      return res.status(500).send('Server error')
    }
    res.redirect('/')
  })
})
module.exports=router