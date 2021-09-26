<template>
    <div>
        我是儿子
        父亲给你的：{{title}}-{{hello}}-{{world}}-{{obj}}

        <button v-on:click="sendMsg" type="button" name="button">发送</button>
    </div>
</template>

<script>
export default {
    name: "child",
    data() {
        return {
            initMsg: "我是儿子的数据，还要发送给父亲"
        }
    },
    props:{
        title:String,
        hello: {  //hello参数
            type: String,  //类型
            required: true  //必选项
        },
        world: {
            type: String,
            default : "hello world"
        },
        obj: {
            type: Object,  //类型是对象
            default:function() {  //对象的默认值
                return {
                    name: "name"
                }
            }
        }
        
    },
    methods: {
        sendMsg(event) {
            //儿子准备好发送数据
            this.$emit("getInfo", this.initMsg);  //第一个参数是key，第二个参数是值，key其实是一个自定义事件
        }
    }
}
</script>

<style>

</style>