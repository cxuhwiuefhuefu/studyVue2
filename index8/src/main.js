import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false // 会阻止你显示生产模式的消息

// 引入HelloWord模块
import HelloWord from './components/HelloWorld'

// 引入路由
import Router from 'vue-router' 
// 使用路由 
Vue.use(Router); 




// 配置路由
const MyRouter = new Router({
  routes: [
    {
      path: '/Home', // 页面的路径
      name: 'HelloWord', // 页面的名字
      component: HelloWord
    }
  ]
})


// 实例化一个对象
new Vue({
  el: '#app',
  router: MyRouter,
  components: { App },
  template: '<App/>'
})