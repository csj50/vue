<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view/>-->
    <HelloWorld @demomsg="getDemoMsg"/>
    <Demo :title="demomsg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/demo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Demo
  },
  methods: {
    getDemoMsg(data) {
      this.demomsg = data;
    }
  },
  data() {
    return {
      demomsg: ""
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
