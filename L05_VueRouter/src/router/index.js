//把main.js主配置文件路由功能移到这里来
//
import Vue from 'vue'  //这里引入vue，是为了下面vue.use，因为组件和组件之前是隔离的，mian.js已经引入了，这里并不能用
import VueRouter from 'vue-router'  ////引入
import HelloWorld from '../components/HelloWorld'
import Hi from '../components/hi'
import Index from '../components/Index'
import Hello1 from '../pages/Hello1'
import Hello2 from '../pages/Hello2'

Vue.use(VueRouter)  //在vue里使用你引入的VueRouter  ////use一下

//var router = new VueRouter({  ////创建路由对象
export default new VueRouter({  ////创建路由对象，并且把对象扔出去，现在外部才能访问
  linkActiveClass: "active",
  mode: "history",
  routes: [
    { path: "/",
      redirect: "/index"},
    // 动态路径参数 以冒号开头
    { path: '/hello', 
    component: HelloWorld,
    redirect: "/hello/hello1",  //hello页面的重定向，写全路径
    children:[
      {
        path: 'hello1',
        component: Hello1
      },
      {
        path: 'hello2',
        component: Hello2
      }
    ]},
    { path: '/hi/:id/:count',
      name: 'hi',
    component: Hi },
    { path: '/index',
    component: Index }
  ]
})
