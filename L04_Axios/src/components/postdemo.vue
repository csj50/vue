<template>
    <div>
        post请求：
    </div>
</template>

<script>
import qs from 'qs'  //qs包是序列化post请求参数的工具

export default {
    name: 'post',
    data() {
        return {

        }
    },
    created() {
        //axios的post请求接受参数是form-data格式：?name=iwen&age=20
        // this.$axios.post("http://www.weather.com.cn/data/sk/101010100.html", qs.stringify({
        //     user_id: "iwen@qq.com",
        //     password: "iwen123",
        //     verification_code: "crfvw"}
        // ))
        // .then(res => {
        //     console.log(res.data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })

        this.$axios({
            method: "POST",
            url: "http://www.weather.com.cn/data/sk/101010100.html",
            data: {
                user_id: "iwen@qq.com",
                password: "iwen123",
                verification_code: "crfvw"
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
    }
}
</script>

<style>

</style>