# index8


- vue-cli创建项目步骤
  - cd Desktop
  - vue create vue-app（vue3.0版本）  vue init webpack vue-app(vue2.9版本)
  - cd vue-app
  - code .
  - npm run serve
  - vue add router(https://cli.vuejs.org/zh/guide/plugins-and-presets.html#在现有的项目中安装插件) 安装完之后多了个router.js和views文件夹
  - router 页面的跳转
    - npm install vue-router -S(旧版本安装命令)
    - vue add router(新版本安装命令)  npm install vue-router(2.9版本)


- 路由配置
  - 我们把路由放到node_modules包里面了
  - (在main.js文件配置)我们要使用它的话必须导入进来:  import Router from 'vue-router'    
  - 使用Router: Vue.use(Router)  
  - 必须实例化一个路由:new Router({routes: [{path: '/'}, {}]})


- 设置好路由要在app.vue(根组件)里面去使用它


- 让该页面的组件显示在页面当中 使用 `<router-view/>`
- 每点击一次会重新进行一次请求 会刷新 那我们想使用路由的话不想让它重复去进行页面的请求 那我们可以使用路由给我们提供的标签router-link 你点击它实现一个跳转 并且通过一些列的转化也成一个a标签 只不过它和a标签不一样 它不会重复的去刷新一个页面
- 我们一定要用router-link和router-view显示一个路由和实现一个路由的跳转


- 也可以通过路由的名字进行一个跳转  (name)


- routes是所有路径的集合




----




### vue eslint语法限制(npm run dev 老出现警告和错误)
- 因为eslint语法限制过于严格，可以在config中的 index.js 设置 useEslint为 false 在此记录下 


### export defaul 和 export区别
- export default和export都可以用于导出常量 函数 文件模块等
- 可以在模块中通过import+(常量 | 函数 文件 | 模块)名的方式 将其引入 以便能够对其进行使用
- 在一个文件或模块中 export import可以有多个 但是export default只能有一个  
- 通过export方式导出时要加{} 在导入的生活需要加{} export default不需要在导出和导入的生活加{}


