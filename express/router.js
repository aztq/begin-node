const express = require('express')  //引入这一行仅是为了express自带的router
const router =express.Router()

router.get('/', function (req, res) {
  res.send('Birds home page')
})

router.get('/pain', function (req, res) {
  res.send('pain,l want to go home')
})

module.exports = router //导出router