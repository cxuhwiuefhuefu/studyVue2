// 从node_modules目录中引入vue 
import Vue from 'vue'
// 引入根组件
import App from './App'
// 引入路由文件
import router from '@/router/router'
// 引入公共基础样式
import '@/assets/style/reset.css' 

Vue.config.productionTip = false

// 实例化一个vue实例
new Vue({
  el: '#app', // 挂在到id为app的div上
  router,
  components: { App },
  template: '<App/>' // 相对于把id为app的元素替换成</app> 如何</app>又被识别为App组件 也就是App.vue
})
