// 问题：index.js无法被浏览器直接执行
// 如果是浏览器支持的语法
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')