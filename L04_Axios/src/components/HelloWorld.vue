<template>
  <div class="hello">
    {{ axiosData }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      axiosData: ""
    }
  },
  created() {
    // this.$axios.get("http://www.weather.com.cn/data/sk/101010100.html")
    //   .then(function (response) {  //正确的情况
    //   //this.axiosData = response.data;
    //   console.log(response.data);
    // })
    // .catch(function (error) {  //错误的情况
    //   console.log(error);
    // });

    this.$axios({
      method: 'get',
      url: 'http://www.weather.com.cn/data/sk/101010100.html',
      params: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
