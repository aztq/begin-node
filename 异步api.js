function fn(callback){
  var a= 1;
  setInterval(() => {
    callback()
  }, 1000);
  console.log(data)
}
callback(){
  console.log(data)
}
fn()