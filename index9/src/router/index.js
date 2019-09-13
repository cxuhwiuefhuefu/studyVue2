import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/About'
import Community from '@/components/Community'
import Home from '@/components/Home'
import Learn from '@/components/Learn'
import Student from '@/components/Student'

import Academic from '@/components/community/Academic'
import Download from '@/components/community/Download'
import Personal from '@/components/community/Personal'

import Question from '@/components/Question'
import Err from '@/components/Err'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE-URL, // ????
  linkActiveClass: 'active', // 重置类名
  linkExactActiveClass: 'exact', 
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
      redirect: '/community/academic', // 每当你进入到这个路径的时候都会重定向到另外一个路径去
      children: [
        {
          path: '/community/academic',
          name: 'academic',
          component: Academic
        },
        {
          path: '/community/download',
          name: 'download',
          component: Download
        },
        {
          path: '/community/personal',
          name: 'personal',
          component: Personal
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      // component: Home

      components: {
        default: Home,
        'academic': Academic
      }
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/question/:id', // 只要加上:id 它就会让你是动态 它就会根据你这个值动态的去这个路径
      name: 'question',
      component: Question
    },
    {
      path: '/err.html',
      name: 'err',
      component: Err
    },
    {
      path: '*', // 除了配置之外的一切路径
      // redirect: '/home'
      // 万一输入错误路径会提示你
      redirect(to) { // to 你将要去的页面
        // console.log(to);
        if(to.path == '/') {
          return '/home';
        }else {
          return {name: 'err'};
        }
      }
    }
  ]
})
