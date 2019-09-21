export default {
    namespaced: true, // 写命名空间为true
    state: {
        studentList: []
    },
    getters: {
        newStudent(state, getters) { // 可以用getters使用里面的值
            return state.studentList.map((item, index) => {
                if(index == 0) {
                    return '**' + item + getters.a;
                }else if(index < 3) {
                    return item + '**';
                }else {
                    return '++' + item + '++';
                }
            })
        }
    },
    mutations: {
        changeStudent(state, {name, number}) { // 想传多个可以写成对象的形式
            // state.studentList.push(name+number);

            // setTimeout(() => { // 报错 因为它在另一个作用域里面修改了 不是在mutation函数里面修改了  用setTimout写很麻烦
            //     state.studentList.push(name + number);
            // })

            state.studentList.push(name + number);
  
        },
    },
    actions: {
        changeStudent(ctx, {name, number}) { // 上下文对象 是最外面的对象 相当于store
            setTimeout(function() { // 异步延迟1000毫秒执行
                ctx.commit('changeStudent', {name, number});
            }, 1000)   
        }
    }
}