<template>
    <div>
        <input v-focus name="" type="text" value="">
        <p v-mycss>哈哈哈</p>
        <p v-hello></p>
        <p v-big>大大大</p>
        {{ d1 | author}}
        {{ d2 | author}}
        {{ m1 | money}}
        {{ m2 | myMoney}}
    </div>
</template>

<script>
export default {
    name: 'dir',
    data() {
        return {
            d1: "我是数据d1",
            d2: "我是数据d2",
            m1: 20,
            m2: 30
        }
    },
    directives: {
        hello: {
            inserted: function(el) {
                el.innerHTML = "hello";
            },
            bind: function(el) {
                console.log("初始化");
            }
        },
        big:{
            inserted: function(el) {
                el.style.fontSize = '30px';
            }
        }
    },
    filters: {
        myMoney: function(value) {
            return "$" + value;
        }
    }
    
}
</script>

<style>

</style>