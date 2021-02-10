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
      <el-button type="primary" @click="onSaveArticle">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      article: {
      }
    }
  },
  methods: {
    onSaveArticle() {
      console.log(this.article)
    }
  }
}
</script>
