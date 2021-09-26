// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'  //就是App.vue
//import NewApp from './NewApp'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({  //创建一个vue的实例（es6的语法，直接new）
  el: '#app',  //绑定根视图
  components: { App },  //加载App.vue这个组件
  template: '<App/>'  //使用组件，显示出来
  //el: '#newapp',
  //components: {App, NewApp},
  //template: '<NewApp/>'
})
