<template>
  <div id="app">

    <div class="header">
      <div class="center">
        <div class="logo">
          <img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png" alt="">
        </div>
        <ul class="nav">
          <router-link tag="li" to="/home">首页</router-link>
          <router-link tag="li" to="/learn">课程学习</router-link>
          <router-link tag="li" to="/student">学员展示</router-link>
          <router-link tag="li" to="/about">关于</router-link>
          <router-link tag="li" to="/community">社区</router-link>
        </ul>
      </div>
    </div>
  
    <router-view class="router-view"></router-view>
    <!-- <router-view class="router-view" name="academic"></router-view> name就是我们配置component的名字 -->
  
    <div class="footer"></div>
  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

/*
 .router-link-exact-active
 .router-link-active
*/

.router-link-exact-active{
  /* border-bottom: 2px solid #fff;   */
}
/* .router-link-active, */
.active{ /* 只要当前选中的路径是router-link的路径 只要斜杆包含了某个router-link的一个路径 
                        那么他的class就会被添加上router-link-active这个class  */
  border-bottom: 2px solid #fff;
}

.header{
  background: #000;
  line-height: 70px;
  padding-bottom: 2px;
}
.header .center{
  display: flex;
  justify-content: space-between; /* 定义了项目在主轴上的对齐方式 */
  width: 1000px;
  margin: 0 auto;
}
.header .center .logo{
  line-height: 70px; /* ?? */ 
}
.header .center img{
  width: 50px;
  height: 50px;
  vertical-align: middle; /* ?? */ 
}
.header .center ul{
  display: flex;
}
.header .center li{
  color: #fff;
  padding: 0 30px;
  cursor: pointer;
}

.router-view{
  width: 1000px;
  min-height: 500px; /* 给他个500px像素撑开下面的footer */
  margin: 0 auto;
  padding: 40px;
}

.footer{
  /* position: fixed;
  bottom: 0; */
  width: 100%;
  height: 70px;
  background: #000;
}


</style>
