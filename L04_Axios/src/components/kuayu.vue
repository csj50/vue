<template>
    <div>
        kuayu
        {{temp}}
        <p ref="myp">哈哈</p>
        <ul ref="ul">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "kuayu",
    data() {
        return {
            temp: ""
        }
    },
    created() {
        //网络请求
        var url = this.HOST + "/data/sk/101010100.html";
        //this.$axios.get("http://www.weather.com.cn/data/sk/101010100.html")
        this.$axios.get(url)
        .then(res => {
            this.temp = res.data.weatherinfo.temp;
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    mounted() {
        console.log(this.$refs.myp); //拿到这个节点
        console.log(this.$refs.ul);
    }
}
</script>

<style>

</style>
