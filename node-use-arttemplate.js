//引入art-template第三方包
var template=require('art-template')

var sample=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  'hello {{name}}'
</body>
</html>
`
var content=template.render(sample,{
  name:'j'
})
console.log(content)