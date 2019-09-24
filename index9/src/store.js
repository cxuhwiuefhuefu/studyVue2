import Vue from 'vue'
import Vuex from 'vuex'

import student from '@/modules/student'
import course from '@/modules/course'

Vue.use(Vuex)




// 两个功能的数据抽离开了
// const student = {
//     namespaced: true, // 写命名空间为true
//     state: {
//         studentList: []
//     },
//     getters: {
//         newStudent(state, getters) { // 可以用getters使用里面的值
//             return state.studentList.map((item, index) => {
//                 if(index == 0) {
//                     return '**' + item + getters.a;
//                 }else if(index < 3) {
//                     return item + '**';
//                 }else {
//                     return '++' + item + '++';
//                 }
//             })
//         }
//     },
//     mutations: {
//         changeStudent(state, {name, number}) { // 想传多个可以写成对象的形式
//             // state.studentList.push(name+number);

//             // setTimeout(() => { // 报错 因为它在另一个作用域里面修改了 不是在mutation函数里面修改了  用setTimout写很麻烦
//             //     state.studentList.push(name + number);
//             // })

//             state.studentList.push(name + number);
  
//         },
//     },
//     actions: {
//         changeStudent(ctx, {name, number}) { // 上下文对象 是最外面的对象 相当于store
//             setTimeout(function() { // 异步延迟1000毫秒执行
//                 ctx.commit('changeStudent', {name, number});
//             }, 1000)   
//         }
//     }
// }
// const course = {
//     namespaced: true,
//     state: {
//         courseList: [
//             {
//                 name: '课程1',
//                 price: 0,
//                 poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
//             },
//             {
//                 name: '课程2',
//                 price: 8.8,
//                 poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
//             },
//             {
//                 name: '课程3',
//                 price: 8.8,
//                 poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
//             },
//             {
//                 name: '课程4',
//                 price: 8.8,
//                 poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
//             },
//             {
//                 name: '课程5',
//                 price: 8.8,
//                 poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
//             },
//             {
//                 name: '课程6',
//                 price: 8.8,
//                 poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
//             },
//             {
//                 name: '课程7',
//                 price: 8.8,
//                 poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
//             },
//             {
//                 name: '课程8',
//                 price: 8.8,
//                 poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
//             }
//         ]
//     },
//     mutations: {
//         changeCourse(state, {index, name, price}) {
//             state.courseList[index].name = name;
//             state.courseList[index].price = price;
//         }
//     },
// }




export default new Vuex.Store({ // 
    strict: true, // 开启严格模式 不能再vuex外面更改数据 尽量在mutation函数里面更改
    state: { // 公共数据池 就是你 在我们这个应用里面 无论在哪个组件里面都拿到我们这个数据池里面的内容 并且你可以去进行一个更改
        name: '航哥',
        age: 18,
        look: 'beautiful',

        // studentList: [],
        // courseList: [
        //     {
        //         name: '课2222222222222222222222222程1',
        //         price: 0,
        //         poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
        //     },
        //     {
        //         name: '课程2',
        //         price: 8.8,
        //         poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
        //     },
        //     {
        //         name: '课程3',
        //         price: 8.8,
        //         poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
        //     },
        //     {
        //         name: '课程4',
        //         price: 8.8,
        //         poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
        //     },
        //     {
        //         name: '课程5',
        //         price: 8.8,
        //         poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
        //     },
        //     {
        //         name: '课程6',
        //         price: 8.8,
        //         poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
        //     },
        //     {
        //         name: '课程7',
        //         price: 8.8,
        //         poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
        //     },
        //     {
        //         name: '课程8',
        //         price: 8.8,
        //         poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
        //     }
        // ],

        // courseList: [1, 2, 3]
    },
    getters: { // 相当于我们的计算属性 和计算属性差不多 它更改的也是数据池里面的东西 
               //     通过数据池里面的某个值进行更改来得到新的一个值

        // newStudent(state, getters) { // 可以用getters使用里面的值
        //     // console.log(state, getters);
        //     return state.studentList.map((item, index) => {
        //         if(index == 0) {
        //             return '**' + item + getters.a;
        //         }else if(index < 3) {
        //             return item + '**';
        //         }else {
        //             return '++' + item + '++';
        //         }
        //     })
        // },

        a() {
            return '111';
        }
    },
    mutations: {
        // changeStudent(state, {name, number}) { // 想传多个可以写成对象的形式
        //     // state.studentList.push(name+number);

        //     // setTimeout(() => { // 报错 因为它在另一个作用域里面修改了
        //     //                    //     不是在mutation函数里面修改了  用setTimout写很麻烦
        //     //     state.studentList.push(name + number);
        //     // })

        //     state.studentList.push(name + number);
  
        // },
        
        // changeCourse(state, {index, name, price}) {
        //     console.log(index, name, price);
        //     state.courseList[index].name = name;
        //     state.courseList[index].price = price;
        // }
    },
    actions: { // 可以在里面触发某个Mutations的函数 让它去执行这个函数 
               //     然后通过里面的函数去更改里面的值 在组件内就能触发Mutations里的函数 
               //     为什么还要用action呢 它存在的意义就是为了执行异步的操作
               //     如果是要异步的话就放在action里面
        // changeStudent(ctx, {name, number}) { // 上下文对象 是最外面的对象 相当于store
        //     setTimeout(function() { // 异步延迟1000毫秒执行
        //         ctx.commit('changeStudent', {name, number});
        //     }, 1000)   
        // }
    },

    // 模块化
    modules: {
        course,
        student
    }
})