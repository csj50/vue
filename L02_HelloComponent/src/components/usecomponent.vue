<template>
    <div>
        <p>准备实现插槽功能</p>
        <!-- <slot>为传递任何插槽数据</slot> -->
        <slot name="hello">hello 插槽</slot>
        <slot name="world" v-bind:text="text" >world 插槽</slot>
    </div>
</template>

<script>
export default {
    name: "usecomponent",
    data() {
        return {
            text: "我是插槽数据"
        }
    }
}
</script>

<style>

</style>