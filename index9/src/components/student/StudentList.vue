<template>
    <div>
        学生列表：
        <ul>
            <li v-for="(item, index) in student" 
                :key="index">
                {{index}}-{{item}}
            </li>
        </ul>

        {{this.$store.state.name}}
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    // props: ['student-list'], 
    data() {
        return {
            // studentList: []
        }
    },
    computed: {
        // studentList() {
        //     return this.$store.state.studentList
        // }
        
        
        // ...mapState(['studentList']),
        // 模块化的写法
        // ...mapState('student', ['studentList']),


        // newStudent() {
        //     return this.$store.getters.newStudent;
        // }
        // ...mapGetters(['newStudent']) // 数组形式
        // ...mapGetters({ // 对象形式
        //     student: 'newStudent' // 新命名: Getters里面的命名
        // })
        // 模块化的写法
        ...mapGetters('student', {
            student: 'newStudent'
        })
    },
    created() {
        // this.bus.$on('add', name => {
        //     this.studentList.push(name);
        // })
    },
    // 注册的总线事件要在组件销毁时卸载，否则会多次挂载，造成触发一次但多个响应的情况
    beforeDestroy() { 
        // this.bus.$off('add', name => {
        //     this.studentList.push(name);  
        // })
    },
}
</script>

<style scoped>

</style>