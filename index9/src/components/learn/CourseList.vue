<template>
    <ul id="course-list">
        <li v-for="item in courseList"
            :key="item.name"
            class="course">
            <img :src="item.poster" alt="" class="poster">
            <p class="title">{{item.name}}</p>
            <div class="course-info">
                <div class="price" v-if="item.price > 0">￥{{item.price}}</div>
                <div class="price free" v-else>免费</div>
                <div class="institution">航哥好帅</div>
            </div>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        // ...mapState(['courseList'])

        // courseList() {
        //     return this.$store.state.course.courseList // 需要加上模块名字才能取到
        // }

        ...mapState('course', ['courseList']) // 模块名字,   不写模块找的根数据里面的courseList  
                                              //   如果想通过这种方式去寻找 必须写命名空间 不仅仅是通过这个mapState 只要我们找除state以外的数据就要写命名空间 写命名空间为true
    }
}
</script>

<style scoped>
    #course-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 14px;
    }
    .course {
        width: 220px;
        padding: 10px;
        border: 1px solid transparent;
        margin-bottom: 20px;
    }
    .course:hover {
        border-color: #ddd;
        box-shadow: 1px 1px 2px 1px #ececec;
    }
    .poster{
        width: 220px;
        height: 124px;
    }
    .title{
        color: #333;
        margin: 5px 0;
        min-height: 40px; /* 我们想让它一行的时候和两行的时候表现的是一致的
                             如果不是最小高度的话他会蹭上去的 li的高度就不一致了 
                             所以给这个标题最小高度 */
    }
    .title:hover{
        color: #62b4f7;
    }
    .course-info{
        display: flex;
        justify-content: space-between;
    }
    .price{
        color: #e85308;
    }
    .price.free{
        color: #5fb41b;
    }
    .institution {
        color: #999
    }
</style>