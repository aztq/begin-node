const Koa = require('koa');

const app =new Koa();

//app.use(async (ctx, next) => {
//  await next();
//  ctx.response.type = 'text/html';
//  ctx.response.body = 
//  `{
//    "fruits":[{type:'apple',price:'￥11'},{type:'apple',price:'￥11'},{type:'apple',price:'￥11'}]
//  }`
//});

app.use(async( ctx ,next)=>{
  console.log("one")
  await next()
  console.log("two")
})
app.use(async( ctx ,next)=>{
  console.log("1")
  await next()
  console.log("2")
})
app.use(async( ctx ,next)=>{
  console.log("order")
  await next()
  console.log("玛格丽特")
})

app.listen(3000);
