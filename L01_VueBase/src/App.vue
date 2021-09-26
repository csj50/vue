<template>
  <div id="app">
    {{ demo }}
    <div v-html="demo"></div>
    <div v-bind:class="active" v-bind:data-id="id">hello</div>
    <img src="./assets/logo.png">
    {{ 1+2 }}
    {{ 10>9?'对了':'错了'}}
    <div v-if="flag">我是条件渲染</div>
    <template v-if="flag">
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </template>
    <template v-else>
      <p>4</p>
    </template>
    <ul>
      <li v-for="item in names" v-bind:key=item>{{item}}</li>
      <li v-for="(item, index) in names" v-bind:key=index>{{item}} - {{index}}</li>
      <li v-for="(obj, key, index) in myobj" v-bind:key=index>{{obj}} - {{key}} - {{index}}</li>
    </ul>
    <button v-on:click="count += 1" type="button" name="button">按钮</button>
    {{count}}
    <button v-on:click="clickHandler" type="button" name="button">第二个按钮</button>
    {{eventShow}}
    <button v-on:click="dataevent(context, $event)" type="button" name="button">第三个按钮</button>
    <input name="input" type="input" v-on:keyup="getInfo($event)" value="" />
    <HelloWorld/>
    <nihao/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import nihao from './components/nihao.vue' //导入nohao组件

export default {
  name: 'App',
  data() {  //全局变量，都可以用
    return {
      demo: "<h1>我是第一个VueDemo</h1>",
      active: "actives",
      id: "19",
      flag: false,
      names:["iewn","iem","ice"],
      myobj:{
        name:"iwen",
        age:"29"
      },
      count: 0,
      eventShow: "我是孙悟空",
      context: '悟空，快给为师抓个妖孽玩一玩'
    }
  },
  methods: {
    clickHandler(event) {
      console.log(this);
      this.eventShow = "我是六耳猕猴";
    },
    dataevent(data, event) {
      console.log(data, event);
    },
    getInfo(event) {
      console.log(event);
      if (event.keyCode == 13) {
        console.log("你按了回车键");
      }
    }
  },
  components: {
    HelloWorld,
    nihao
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
