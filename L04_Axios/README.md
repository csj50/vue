https://www.kancloud.cn/yunye/axios/234845
1、Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
2、优势：
从浏览器中创建 XMLHttpRequests
从 node.js 创建 http 请求
支持 Promise API
拦截请求和响应
转换请求数据和响应数据
取消请求
自动转换 JSON 数据
客户端支持防御 XSRF
3、安装
cnpm install axios --save
4、引入
import Axios from 'axios'  //引入axios组件
Vue.prototype.$axios = Axios  //把axios挂到原型身上
5、应用
  方式一：在生命周期函数里调用
  方式二：和ajax类似
6、get请求
7、post请求
8、拦截器
  请求拦截：在发送请求之前做些事情
  返回拦截：对响应数据做点什么
9、mock
  网络请求模拟数据的方案，有三种形式：
  第一种，get访问自己的json文件
    缺点：无法进行post请求
  第二种，自己搭建服务器模拟数据
    挺好的
  第三种，使用线上已存在的数据
    必须提前存在服务器
10、跨域问题
  webpack自带服务器node，通过node把数据读过来，然后再提供给vue使用
  在config/index.js中
  proxyTable加入
  "/api": {
        target: "http://www.weather.com.cn",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }

  Vue.prototype.HOST = '/api'  //把api挂到HOST身上
  访问HOST就是访问api，访问api就是访问target地址
  修改配置要重启服务器！！！才生效！！！
  配置只能改dev环境下的！！！
  设置代理，不需要加全局配置！！！

