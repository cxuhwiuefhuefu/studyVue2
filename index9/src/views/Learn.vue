<template>
    <div>
        <!-- 课程学习 -->
        <course-list></course-list>

        <!-- <button class="change-course-btn">修改课程</button> -->
        <router-link :to="{name: 'changeCourse'}"
                     tag="button"
                     class="change-course-btn">
                     修改课程
        </router-link>
        <!-- 匹配到组件将在这里显示 -->
        <router-view></router-view>
    </div>
</template>
<script>
import CourseList from '@/components/learn/CourseList'
export default {
    components: {
        CourseList
    }
}
</script>
<style lang="">
    .change-course-btn{
        display: block;
        margin: 20px auto;
        width: 200px;
        line-height: 40px; /* 高度为40px */
        background-color: #000;
        color: #fff;
    }
</style>