// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'  //引入axios组件

import qs from 'qs'

Vue.config.productionTip = false

Vue.prototype.$axios = Axios  //把axios挂到原型身上
Vue.prototype.HOST = '/api'  //把api挂到HOST身上

//全局axios配置
//Axios.defaults.baseURL = 'https://api.example.com';
//Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.method === "post") {
    config.data = qs.stringify(config.data);
  }
  console.log(config);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response.status !== 200) {
    return;
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
