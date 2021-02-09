import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from './views/ArticleList.vue'
import CreateArticle from './views/CreateArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/articleList'
  },
  {
    path: '/articleList',
    component: ArticleList
  },
  {
    path: '/createArticle',
    component: CreateArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
