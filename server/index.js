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

// 新增文章接口
app.post('/api/articles', async (req, res) => {
  // 使用Article的create方法创建新的数据对象，req.body里面就是文章的title和content
  const article = await Article.create(req.body)
  // 将数据返回给前端
  res.send(article)
})

// 获取文章列表接口
app.get('/api/articles', async (req, res) => {
  // Article.find()函数来查找Article数据
  const articles = await Article.find()
  res.send(articles)
})

// 删除文章接口
app.delete('/api/articles/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status: true
  })
})

// 文章详情接口
app.get('/api/articles/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.send(article)
})

// 修改文章接口
app.put('/api/articles/:id', async (req, res) => {
  // 通过id获取对象并使用req.body替换
  const article = await Article.findByIdAndUpdate(req.params.id, req.body)
  res.send(article)
})

// 开启监听
app.listen(3001, () => {
  console.log('http://localhost:3001/')
})
