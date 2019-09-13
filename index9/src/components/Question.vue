<template>
    <div>
        问题：{{ question }}
        <button @click="handleClick">点击</button>
    </div>
</template>

<script>
export default {
    created() {
        const questionId = this.$route.params.id;

        // 正常是发送一组请求的 现在模拟
        const index = this.questionList.findIndex(item => item.questionId == questionId);
        if(index == -1) {
            // 找不到跳转到另一个页面去
            // this.$router.go(-1); // 0当前页面 负数 回退

        
            // replace [a, b, c, d] => [a, b, c, e] 替换
            // this.$router.replace('/err.html');
            this.$router.replace({name: 'err'});
            // push [a, b, c, d] => [a, b, c, d, e] ?? 为什么不能跳转??  压栈
            // this.$router.push({name: 'err'});

        }else {
            this.question = this.questionList[index].title;
        }
       
        console.log(index)
    },
    methods: {
        handleClick() {
            this.$router.push({name: 'err'});
        }
    },
    data() {
        return {
            question: "",
            questionList: [
                {
                    questionId: 201801,
                    title: '到底什么是ed6中的class(类)?怎么实现class（类）'
                },
                {
                    questionId: 201802,
                    title: '什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数'
                },
                {
                    questionId: 201803,
                    title: '什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>