<template>
    <div>
        添加学生：
        <input type="text" v-model="name">
        <!-- <button @click="add">确认添加</button> -->
        <button @click="changeStudent({name, number: 1})">确认添加</button>
        

        {{storeName}}
        {{storeAge}}
        {{storeLook}}
        {{a}}
        <!-- {{name}}
        {{age}}
        {{look}} -->
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'; // mapState有个返回值 是个对象 对象里面有个key和value 这里面的key和value都是是函数 computed的返回值和他长得一样
                                 //     意味着可以把computed直接赋值给我们的mapState的返回值

export default {
    data() {
        return {
            name: "",
            // storeName: this.$store.state.name

            index: 0,
        } 
    },
    // computed: { // 计算属性
    //     storeName() {
    //         return this.$store.state.name
    //     },
    //     StoreAge() {
    //         return this.$store.state.age
    //     },
    //     storeLook() {
    //         return this.$store.state.look
    //     }
    // },

    // computed: mapState(['name', 'age', 'look']), //函数执行返回值是一个对象
    // computed: mapState({ // key是计算属性里面值得名字 value是一个函数的返回值 避免数据命名方式的冲突 可能我这个组件有自己的计算属性
    //     storeName: state => state.name,
    //     storeAge: state => state.age,
    //     storeLook: state => state.look
    // }),
    computed: { // 一些值是通过mapState这个方式拿到的 有一些是自己定义的 用拓展运算符 这个是最完美的方式
        ...mapState({ // 取根数据就不需要修改了在前面不需要加上模块的名字了
            storeName: state => state.name,
            storeAge: state => state.age,
            storeLook: state => state.look
        }),

        a() {
            return '111';
        }
    },
    methods: {
        // add() {
        //     // this.$emit('add', this.name);

        //     // console.log(this.bus);
        //     // this.bus.$emit('add', this.name);

        //     // this.$store.state.name = '航哥帅';
        //     // this.$store.state.studentList.push(this.name);

        //     // this.$store.commit('changeStudent', {name: this.name, number: 1});

        //     this.$store.dispatch('changeStudent', {name: this.name, number: 1});
        // }



        // ...mapActions(['changeStudent']) // 意味着添加学生这个组件里面有个函数叫做changeStudent
        // 模块化的写法
        ...mapActions('student', ['changeStudent']) // 使用模块 其余的地方都没有做一些太大修改 更方便我们去操作一些数据 去处理一些逻辑 进行一些修改 
    }
}
</script>

<style scoped>
    button{
        margin-left: 20px;
        line-height: 25px;
        width: 80px;
    }
</style>