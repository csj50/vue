<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button v-on:click="changeEvent" name="button" type="button">切换</button>
    <keep-alive>
      <component v-bind:is="currentView"></component>
    </keep-alive>
    <componentDemo></componentDemo>
    <anim></anim>
    <animNew></animNew>
    <directivedemo></directivedemo>
  </div>
</template>

<script>
import CT1 from './components/ct1.vue'
import CT2 from './components/ct2.vue'
import componentDemo from './components/componentDemo.vue'
import anim from './components/anim.vue'
import animNew from './components/animNew.vue'
import directivedemo from './pages/directivedemo.vue'

export default {
  name: 'App',
  data() {
    return {
      currentView: CT1,
      flag: true
    }
  },
  components: {
    CT1,
    CT2,
    componentDemo,
    anim,
    animNew,
    directivedemo
  },
  methods: {
    changeEvent(event) {
      if (this.flag) {
        this.currentView = CT2;
        this.flag = false;
      } else {
        this.currentView = CT1;
        this.flag = true;
      }
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
