<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <parent/> -->
    <useComponent >
      <!-- 虽然数据传递给了子组件显示，但是，渲染的时候，依然是在父组件中渲染 -->
      <!-- <p>我是父亲</p> -->
      <div slot="hello">
        <p>哈哈1</p>
        <p>哈哈2</p>
      </div>
      <!-- 为所有的插槽使用完整的基于 <template> 的语法 -->
      <template v-slot:world="slotProps">
        <p>{{ h3 }}-{{slotProps.text}}</p>
      </template>
      
    </useComponent>
  </div>
</template>


<script>

import parent from './components/parent.vue'
import useComponent from './components/usecomponent.vue'

export default {
  name: 'App',
  components: {
    parent,
    useComponent
  },
  data() {
    return {
      h3: "哈哈4"
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
