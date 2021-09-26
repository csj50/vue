<template>
    <div>
        demo: {{title}}
        <!--<p>Demo读取Count: {{$store.state.count}}</p>-->
        <p>Demo读取Count: {{$store.getters.getState}}</p>
        <button @click="minCount" name="button">减少count</button>
        <p>登录状态：{{this.$store.state.isLogin ? '已登录' : '未登录'}}</p>
        <button @click="login" type="button" name="button">登录</button>
        <button @click="logout" type="button" name="button">退出</button>
    </div>
</template>

<script>
export default {
    name: "demo",
    data() {
        return {

        }
    },
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    methods: {
        minCount(event) {
            //this.$store.commit('min');
            this.$store.dispatch('mins');
        },
        login(event) {
            this.$store.commit('login');
        },
        logout(event) {
            this.$store.commit('logout');
        }
    }
}
</script>

<style>

</style>