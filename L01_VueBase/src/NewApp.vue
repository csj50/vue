<template>
  <div id="newapp">
    <input v-model.lazy="msg" type="text" name="" value="" />
    <p>{{ msg }}</p>
    <button v-on:click="getMSG" type="button" name="button">按钮</button>
    <ul>
      <li v-for="item in names" v-bind:key="item">{{ item }}</li>
    </ul>
    <button v-on:click="addInfo" type="button" name="button">去吧，皮卡丘</button>
    <div>
      <p v-bind:class="{active : isActive, demo: true }">哈哈</p>
      <p v-bind:class="[h1,h2]">111</p>
      <p v-bind:class="[{'hello1':true}, 'hello2']">222</p>
    </div>
    <ul>
      <li v-for="(item, index) in names" v-bind:key="index" v-bind:class="[{'active':index%2 == 0}, 'hello']">{{item}}</li>
    </ul>
    <div>
      <p v-bind:style="myStyle">字体</p>
    </div>
    <div>{{ messageInfo }}</div>
    <div>{{ messageInfo2() }}</div>
  </div>
</template>

<script>

export default {
  name: 'NewApp',
  data() {
    return {
      msg: "hello",
      names:["iwen","ime","ice"],
      isActive: false,
      h1: "hhh1",
      h2: "hhh2",
      myStyle:{
        color:'#f00',
        fontSize: '30px'
      }
    }

  },
  methods: {
    getMSG(event) {
      console.log(this.msg);
    },
    addInfo(event) {
      //this.names.push("二哥");
      this.names.concat(["二哥"]);
      console.log(this.names);
      console.log(this.names.concat("二哥"));
    },
    messageInfo2() {
      return this.msg.split('').reverse().join('');
    }
  },
  computed: {
    messageInfo() {
      return this.msg.split('').reverse().join('');
    }
  }

}
</script>

<style>

</style>
