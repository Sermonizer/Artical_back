<template>
  <el-main>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="140"></el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        width="220"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row._id)" type="text" size="small"
            >编辑</el-button
          >
          <el-button
            @click="handleDelete(scope.row._id)"
            type="text"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      // 定义空数组为文章列表项
      articles: []
    }
  },
  methods: {
    // 渲染首页的函数
    fetchData() {
      this.$http.get('articles').then(res => {
        this.articles = res.data
      })
    },
    // 编辑文章
    handleEdit(id) {
      this.$router.push(`/articles/${id}/edit`)
    },
    // 删除文章
    handleDelete(id) {
      this.$http.delete(`articles/${id}`).then(res => {
        this.$message.success('文章删除成功')
      })
      this.fetchData()
    }
  },
  // 页面渲染时自动执行的函数
  created() {
    this.fetchData()
  }
}
</script>

<style>
</style>
