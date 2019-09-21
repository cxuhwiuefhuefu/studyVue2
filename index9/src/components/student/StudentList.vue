<template>
    <div>
        学生列表：
        <ul>
            <li v-for="(item, index) in studentList" 
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
    // props: ['student-list'], // ????
    data() {
        return {
            // studentList: []
        }
    },
    computed: {
        // ...mapState(['studentList']),
        // 模块化的写法
        ...mapState('student', ['studentList']),



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
        this.bus.$on('add', name => {
            this.studentList.push(name);
        })
    }
}
</script>

<style scoped>

</style>