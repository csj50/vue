<template>
    <div class="hi">
        hi: {{title}}
        <button @click="sendMsg" type="button" name="button">发送数据</button>
        <p>HI读取count: {{getCount}}</p>
        <button @click="updateCount" name="button">Hi修改count</button>
    </div>
</template>

<script>
export default {
    name: 'hi',
    data() {
        return {
            msg: "我是hi的数据"
        }
    },
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    methods: {
        sendMsg(event) {
            this.$emit("getMsg", this.msg);
        },
        updateCount(event) {
            //this.$store.commit('add');  //调用mutation
            this.$store.dispatch('adds');  //调用actions
        }
    },
    computed: {
        getCount() {
            return this.$store.getters.getState;
        }
    }
}
</script>

<style>

</style>