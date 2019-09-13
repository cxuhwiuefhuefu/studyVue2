<template>
    <div class="home">
        首页
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    div{ /* 为什么在这写的颜色值会影响到其他组件的颜色值 他们会互相影响 怎么让它的样式只应用于我们的home组件 
            scoped就是作用域的意思 让它只作用于我这个组件 去新创建vue所需这三种标签的时候 最好也是吧style scoped这个属性写上
            ctr+shift+p 找到vue.json 配置一下 */
        color: red;
    }

    
</style>
