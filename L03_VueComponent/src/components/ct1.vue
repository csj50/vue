<template>
    <div>
        ct1:
        <button v-on:click="changeCt1" name="button" type="button">切换CT1的内容</button>
        {{ currentCt1 }}
    </div>
</template>

<script>
export default {
    name: "ct1",
    data() {
        return {
            currentCt1: "hello ct1"
        }
    },
    methods: {
        changeCt1() {
            this.currentCt1 = "hello learn ct1";
        }
    }
}
</script>

<style>

</style>