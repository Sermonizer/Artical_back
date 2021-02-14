<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="文章标题">
      <!-- 双向绑定 -->
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSaveArticle">保存</el-button>
      <el-button @click="onBackPage">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      article: {}
    }
  },
  methods: {
    onSaveArticle() {
      this.$http
        .put(`articles/${this.$route.params.id}`, this.article)
        .then(res => {
          this.$message.success('文章编辑成功')
          // 文章创建成功，跳转回首页
          this.$router.push('/articles/index')
        })
    },
    onBackPage() {
      // this.$router相当于全局路由对象，任何页面都可以通过其来调用push()、go()、replace()等方法
      this.$router.push('/articles/index')
    },
    // 显示文章数据
    fetchData() {
      // this.$route获取当前路由对象，获得相应的name、params、path、query等属性
      this.$http.get(`articles/${this.$route.params.id}`).then(res => {
        this.article = res.data
      })
    }
  },
  created() {
    // 进入此页面时要显示文章详情
    this.fetchData()
  }
}
</script>
