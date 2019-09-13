<template>
    <div class="nav">
        <div>
            <!-- <router-link to="/community/academic">学术讨论</router-link>
            <router-link to="/community/download">资源下载</router-link>
            <router-link to="/community/personal">个人中心</router-link> -->

            <router-link :to="{name: 'academic'}">学术讨论</router-link>
            <router-link :to="{name: 'download'}">资源下载</router-link>
            <router-link :to="{name: 'personal'}">个人中心</router-link>
        </div>

        <!-- 没有router-view就看不到这个组件了 -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .nav a{
        display: inline-block;
        padding: 5px 10px;
        margin-right: 20px;
    }

    /* .router-link-active */
    .active{ /* 不想写这么长的类名怎么办呢 在这里可以配置它的名字 */
        background-color: #000;
        color: #fff;
    }
</style>