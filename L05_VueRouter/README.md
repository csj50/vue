1、和不加router模块的区别
http://localhost:8080/#/
地址上有＃号
2、安装
npm install --save vue-router 
3、编写代码
  1.引入
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)
  2.创建Router
    var router = new VueRouter({  ////创建路由对象
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/hello', 
    component: HelloWorld }
  ]
})
  3.注入router
  new Vue({
  el: '#app',
  router,  //路由对象一定要在new vue实例这里应用一下  ////注入
  components: { App },
  template: '<App/>'
})
  4.显示路由组件
  main.js加载根视图App，<router-view></router-view>
  main.js里没有视图，只有配置！！！
4、.js文件里全是配置，.vue文件里没有配置
5、导航组件
  1. <router-link></router-link>
  2. import router from './router'
    引入index.js，不用写，默认找index
    但是此时/router/index.js不能被main访问，因为vue中，组件和组件是隔离的
    export default new VueRouter({  ////创建路由对象，并且把对象扔出去，现在外部才能访问
  3. router-link描述
    默认会被渲染成一个 `<a>` 标签
    可以通过tag属性，渲染成其他标签，比如p标签
    `<router-link tag="p" to="/hello">hello</router-link>`，此时没有a标签效果，但是点击还是会跳转
  4.重定向效果
    { path: '/a', redirect: '/b' }
  5.路由嵌套
    一级页面，里面还有页面
    要嵌套哪个下面，在哪个下面加childen
    显示的位置：父级在哪里，显示的位置就在哪里
6、路由参数
  在每一个路由配置里面，都有一个字段name，只是我们之前没写
  1.配置路由信息
  path: '/hi/:id/:count'
  2.配置路由跳转路径信息
  <router-link :to=" {name: 'hi', params: {id: '100', count: 20} } ">hi</router-link>
  3.读取信息
  {{$route.params.id}}
7、路由高亮
  linkActiveClass: "active"，将默认样式router-link-active改名为active
8、mode history
  依赖 HTML5 History API 和服务器配置
  