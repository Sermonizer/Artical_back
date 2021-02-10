const express = require('express')
const app = express()

// 后端允许跨域
app.use(require('cors')())

// 使用req.body需要让express识别客户端传来的json数据
app.use(express.json())

// 定义数据库模型
const mongoose = require('mongoose')

// 27017: mongodb默认端口号， element-admin：自定义的数据库名
mongoose.connect('mongodb://localhost:27017/element-admin', {
  // 默认参数
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

// 定义文章数据模型
const Article = mongoose.model(
  'Article',
  new mongoose.Schema({
    title: { type: String },
    content: { type: String }
  })
)

// 后端默认首页
app.get('/', async (req, res) => {
  res.send('index')
})

// 新增文章的接口
app.post('/api/articles', async (req, res) => {
  // 使用Article的create方法创建新的数据对象，req.body里面就是文章的title和content
  const article = await Article.create(req.body)
  // 将数据返回给前端
  res.send(article)
})

// 开启监听
app.listen(3001, () => {
  console.log('http://localhost:3001/')
})
