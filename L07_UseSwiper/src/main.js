// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Axios from 'axios'  //引入
import qs from 'qs'

Vue.prototype.$axios = Axios  //挂个原型
Vue.prototype.HOST = '/api'  //把api挂到HOST身上

//全局配置
//Axios.defaults.baseURL = 'http://www.weather.com.cn';
//Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.method === "POST") {
    config.data = qs.stringify(config.data);
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
