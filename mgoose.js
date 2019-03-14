//导包
let mongoose = require('mongoose')

//连接到first数据库
mongoose.connect('mongodb://localhost/first')

var UserSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:String
});

//第一个参数为数据库中的集合collection
var User=mongoose.model('User',UserSchema)


//新增数据，创建实例
// var admin =new User({
//   username:'asdf',
//   password:'asdf'
// })
// admin.save(function(err,success){
//   if(err){
//     console.log('defeat')
//   }
//   else {console.log(success)}
// })


//查询所有，以数组方式返回
// User.find(function(err,ret){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(ret)
//   }
// })


//find条件查询
// User.find({
//   username:"jack"
//   },function(err,ret){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(ret)
//   }
// })


//只查出匹配的第一条,以对象形式返回，若不加条件，返回第一条
// User.findOne({
//   username:"jack"
//   },function(err,ret){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(ret)
//   }
// })


//删除所有符合条件的条数
// User.remove({
//   username:'jack'
// },function(err,ret){
//   if(err){
//     console.log('删除失败')
//   }else{
//     console.log('删除成功')
//   }
// })


//按照id去更新，好像不怎么实用
//参数： id ,更新内容 , 回调
User.findByIdAndUpdate('5c88c6ce786bc4685cf6255d',{username:'里格斯'},
function(err,ret){
  if(err){console.log('更新失败')}
  else{
    console.log('更新成功')
    User.find(function(err,ret){
    if(err){
      console.log(err)
      }else{
        console.log(ret)
      }
    })
  }
})