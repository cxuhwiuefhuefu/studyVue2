<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 路由匹配到的组件将在这里显示 -->
    <!-- <router-view></router-view> -->


    <!-- <a href="/">/</a>
    <a href="/about">About</a>
    <a href="/home">Home</a>
    <router-view></router-view> -->


    <!-- <router-link to="/"></router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link>
    <router-view></router-view> -->


    <router-link :to="homeLink">/</router-link>
    <router-link :to="{name: '11'}">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      homeLink: "/"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
