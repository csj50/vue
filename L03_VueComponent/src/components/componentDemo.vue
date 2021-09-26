<template>
    <div>
        哈哈
        <button v-on:click="changeData" name="button" type="button">改变</button>
        {{ mydata }}
    </div>
</template>

<script>
export default {
    name: "componentDemo",
    data() {
        return {
            mydata: "改变之前的数据"
        }
    },
    methods: {
        changeData() {
            this.mydata = "数据改变之后";
        }
    },
    //组件被创建之前
    beforeCreate() {
        console.log("组件被创建之前");
    },
    //组件被创建之后
    created() {
        console.log("组件被创建之后");
    },
    //组件被渲染之前
    beforeMount() {
        console.log("组件被渲染之前");
    },
    //组件被渲染之后
    mounted() {
        console.log("组件被渲染之后");
    },
    //数据改变重新渲染之前
    beforeUpdate() {
        console.log("数据改变，渲染之前");
    },
    //数据改变渲染之后
    updated() {
        console.log("数据改变，渲染之后");
    },
    //组件销毁之前
    beforeDestroy() {
        console.log("组件销毁之前");
    },
    //组件销毁之后
    destroyed() {
        console.log("组件销毁之后");
    }
}
</script>

<style>

</style>