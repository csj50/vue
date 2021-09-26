<template>
    <div>
        我是父亲
        <!-- parent引用child，child的数据在这一行显示 -->
        <child v-on:getInfo="getInfos" title="我是父亲要传递给儿子数据" v-bind:hello="hello" v-bind:world="world" v-bind:obj="obj"/>
        <p>{{receiveMsg}}</p>
    </div>
</template>

<script>

import child from './child.vue'

export default {
    name: "parent",
    data() {
        return {
            hello: "嘎哈呢",
            world: "",
            obj: {
                name: "iwen",
                age: 29
            },
            receiveMsg: ""

        }
    },
    components: {
        child
    },
    methods: {
        //getInfo是自定义事件，getInfos是事件名称，data是儿子传过来的数据
        getInfos(data) {
            this.receiveMsg = data;
        }
    }
}
</script>

<style>

</style>