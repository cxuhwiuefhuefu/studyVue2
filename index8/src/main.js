import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false // 会阻止你显示生产模式的消息


// 引入HelloWord模块
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'

// 1. 引入路由
import Router from 'vue-router' 
// 2. 使用路由 
Vue.use(Router); 




// 3. 配置路由
const MyRouter = new Router({
  routes: [
    {
      path: '/', // 页面的路径
      name: 'HelloWorld', // 页面的名字
      component: HelloWorld
    },
    {
      path: '/home',
      name: '11',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})


// 实例化一个对象
new Vue({
  el: '#app',
  router: MyRouter, // 4. 让vue实例去使用它 
  components: { App },
  template: '<App/>'
})