<template>
  <div class="hello">
    hello world: {{hiMsg}}
    <hi @getMsg="getHiMsg" title="传递数据" /> <!--父给子传数据-->
    <button @click="sendDemoMsg" type="button" name="button">发送数据给Demo</button>
    <p>HelloWorld读取Count: {{$store.getters.getState}}</p> <!--当前组件可以不加this-->
    <button @click="updateCount" name="button">Hello修改count</button>
  </div>
</template>

<script>
import hi from './Hi'

export default {
  name: 'HelloWorld',
  data () {
    return {
      hiMsg: "",
      demoMsg: "我是传递给Demo的msg"
    }
  },
  components: {
    hi
  },
  methods: {
    getHiMsg(data) {
      this.hiMsg = data;
    },
    sendDemoMsg(event) {
      this.$emit("demomsg", this.demoMsg);
    },
    updateCount(event) {
      //this.$store.commit('add');  //调用mutation
      this.$store.dispatch('adds');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
