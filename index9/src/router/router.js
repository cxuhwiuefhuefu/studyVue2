import Vue from 'vue'
import Router from 'vue-router'

// import About from '@/components/About'
// import Community from '@/components/Community'
// import Home from '@/components/Home'
// import Learn from '@/components/Learn'
// import Student from '@/components/Student'

// import Academic from '@/components/community/Academic'
// import Download from '@/components/community/Download'
// import Personal from '@/components/community/Personal'

// import Question from '@/components/Question'
// import Err from '@/components/Err'




// 路由懒加载
const About = () => import('@/views/About');
const Community = () => import('@/views/Community');
const Home = () => import('@/views/Home');
const Learn = () => import('@/views/Learn');
const Student = () => import('@/views/Student');
const Academic = () => import('@/components/community/Academic');
const Download = () => import('@/components/community/Download');
const Personal = () => import('@/components/community/Personal');
const Question = () => import('@/components/Question');
const Err = () => import('@/components/Err');



Vue.use(Router);

const router = new Router({
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
      meta: { // 路由源信息 你可以自己给他定义一个属性 定义一个值 这个信息从哪里取 这个meta可以在哪里取 可以在自己对应的路径下取 也可以在组件对应的路径下来取
        login: false
      },
      children: [
        {
          // path: '/community/academic', // 路径太麻烦了 把前面重复的删除掉 只要不涉及到斜杠就好了 如果涉及到斜杠它就会认为你涉及到根路径下的/academic 如果你不写斜杠的话 它就会知道它会知道你这个是comminity的子路由 
          path: 'academic',
          name: 'academic',
          component: Academic,
          
          // 路由独享守卫
          // beforeEnter(to, from, next) {
          //   const answer = confirm('你还没有登陆，要登陆后才能浏览信息，要登陆嘛？');
          //   if(answer) {
          //     next({name: 'personal'});
          //   }else {
          //     next(false);
          //   }
          // }
        },
        {
          path: 'download',
          name: 'download',
          component: Download
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal
        }
      ]
    },
    {
      path: '/home',
      // path: '/',  
      // alias: '/home',// 我们想/和/home显示的是同一个路径 需要用到路由别名  这个不适应我们这个项目 因为我们使用这个/的路径的话 就没有那个样式了 在我们这个项目最好还是还是使用重定向这个方法比较好
      name: 'home',
      // component: Home

      components: {
        default: Home,
        // 'academic': Academic
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
      redirect(to) { // to:你将要去的页面  路由重定向   
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




// 1. 全局守卫
// router.beforeEach( (to, from, next) => { // 要到哪里去, 从哪里来的, 决定你能不能进入到这个路由里面去    //  在每个进入之前都会触发这个函数 这里面的函数是一个参数
//   console.log(to.fullPath, from.fullPath);
//   // next(false); // 哪个页面都进不去

//   if(to.path === '/community/academic') {
//     // alert('去社区');
    
//     const answer = confirm('你还没有登录, 要登录后才能浏览器学习，要登陆吗？');
//     if(answer) {
//       next({name: 'personal'});
//     }else {
//       next(false);
//     }

//   }else {
//     next();
//   }
// } )






// 导出
export default router;