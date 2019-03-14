//目的：得到异步方法的操作结果
//调用fn，取得定时器内的data

//function fn() {
//  setTimeout(function(){
//    var data = 'hello'
//    return data
//  },1000)
//}          //undefined


//function fn() {
//  var data= '默认'
//  setTimeout(function(){   //定时器异步，不会等待它执行
//    var data = 'hello'
//  },1000)
//  return data
//}          //‘默认’

//console.log(fn())

function fn(callback) {
  //var callback=function(a){console.log(a)}
  setTimeout(function(){
    var data ='hello'
    callback(data)
  },1000)
}

fn(function(a){
  console.log(a)
})