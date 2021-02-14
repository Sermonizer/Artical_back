import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import {
  Button,
  Submenu,
  Menu,
  Container,
  Header,
  Main,
  Aside,
  MenuItem,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Message
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// 全局定义axios，并创建axios实例
Vue.prototype.$http = axios.create({
  // 设定后端地址作为接口根地址
  baseURL: 'http://localhost:3001/api'
})

Vue.prototype.$message = Message

Vue.use(Button)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
