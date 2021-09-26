// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import G_Directive from './g_directive.js'

Vue.config.productionTip = false

//全局过滤器
Vue.filter("author", function(value){
  return value + "-iwen";
})

//最常用的是金钱的过滤
Vue.filter("money", function(value){
  return "¥" + value;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
