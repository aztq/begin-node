var fs = require('fs')

var path='./students.json'

//获取学生列表
exports.find=function(callback){
  fs.readFile(path, "utf8",function(err,data){
    if(err){
      return callback(err)
    }
    callback(null ,JSON.parse(data).students)
  })
}

exports.findById=function(id,callback){
  fs.readFile(path, "utf8",function(err,data){
    if(err){
      return callback(err)
    }
    var students=JSON.parse(data).students
    var ret=students.find(function(item){
      return item.id===parseInt(id)
    })
    callback(null ,ret)
  })
}

//添加
exports.add=function(single,callback){
  fs.readFile(path, "utf8",function(err,data){
    if(err){
      return callback(err)
    }
    var students=JSON.parse(data).students
    if(students.length===0){
      single.id=1
    }else{
      single.id=students[students.length-1].id+1
    }
    students.push(single)
    var fileData=JSON.stringify({
      students:students
    })
    fs.writeFile(path,fileData ,function(err){
      if(err){
        return callback(err)
      }
      callback(null)
    })
  })
}

exports.updata=function(student,callback){
  fs.readFile(path, "utf8",function(err,data){
    if(err){
      return callback(err)
    }
    var students=JSON.parse(data).students
    //将id统一为number类型
    student.id=parseInt(student.id)
    var stu=students.find(function(item){
      return item.id===student.id
    })
    for (var key in student)
    {
      stu[key]=student[key]
    }
    var fileData=JSON.stringify({
      students:students
    })
    //再写入文件
    fs.writeFile(path,fileData ,function(err){
      if(err){
        return callback(err)
      }
      callback(null)
    })
  })
}

exports.delete=function(remove ,callback){
  fs.readFile(path ,"utf8",function(err,data){
    if(err){
      return callback(err)
    }
    //读出文件中的内容，转为json格式
    var students=JSON.parse(data).students
    for(var i=0;i<students.length;i++){
      if(students[i].name===remove.name){
        console.log(i)
        students.splice(i,1)
      }
    }
    var fileData=JSON.stringify({
      students:students
    })
    //再写入文件
    fs.writeFile(path,fileData ,function(err){
      if(err){
        return callback(err)
      }
      callback(null)
    })
  })
}