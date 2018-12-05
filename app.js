let express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.set('views','./views')
app.set('view engine','jade')
app.listen(port)

console.log('movie server started on port' + port)

app.get('/',function(req, res){
  res.render('index', {
    title: 'movie 首页'
  })
})

app.get('/list',function(req, res){
  res.render('list', {
    title: 'movie 列表'
  })
})

app.get('/detail',function(req, res){
  res.render('detail', {
    title: 'movie 详情'
  })
})

app.get('/admin',function(req, res){
  res.render('admin', {
    title: 'movie 后台'
  })
})