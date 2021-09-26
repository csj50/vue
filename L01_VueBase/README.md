==========说明==========
1、为什么用框架（Angular，React，Vue）
很多业务逻辑移动到前端实现，JavaScript文件会越来越多，处理也会变得更加复杂
2、为什么选择Vue
  渐进式框架
  双向数据绑定
  不需要操作DOM，状态机，状态的改变会引起视图的更新
  Vue不仅仅可以构建整个大型应用，还可以作为一个项目的某一个功能实现然后嵌入项目
  Vue环境构建非常方便：vue-cli指令，构建项目原型
  Vue组件化开发
  社区非常强大，提供各种各样的插件供我们使用
3、模板语法
  Mustache：模板，双大括号{{  }} -> 只能解析文本。数据发生改变视图就会刷新
  v-html：可解析DOM
  App.vue：vue的完整的一个单文件组件，就是完整的html、js、css组成的视图结构，组件和组件之间不关联的，要用引用的方式加载
  v-bind：绑定属性
  {{ 表达式 }}
4、条件渲染
  v-if、v-else-if、v-else
  v-show
  v-if与v-show的区别：v-if相当于remove掉再加回来，v-show相当于display: none
5、列表渲染
  v-for
6、事件处理
  v-on：可以用v-on指令监听DOM事件，并在触发时运行一些JavaScript代码
  事件处理方法：
    methods
  this对象：这个vue组件
  event对象：就是js的event对象
  事件修饰符：
    .stop
    .prevent：阻止默认事件
    .capture
    .self
    .once：只触发一次
    .passive
  按键码：
7、表单输入
  1-双向数据绑定
    v-model：双向的意思是输入和输出，随时可以读取数据
    修饰符；懒加载.lazy，失去焦点才改变
      v-model.lazy
      v-model.trim：取出首尾空格
      v-model.lazy.trim：多个组合
  2-数组
    变更方法：改变原数组
    替换数组：filter()、concat()和slice()不改变原数组
8、class与style样式
  v-bind:style
9、计算属性
  对数据进行处理
  computed对象和data、methods同级别，定义方法把一段业务逻辑封装起来
  计算属性vs方法：计算属性执行一次后，会把结果缓存，如果数据不发生变化，其他地方调用，不会再执行
10、组件
  1-创建组件
    HTML、JavaScript、CSS
  2-引用组件
    我们只能在App.vue中引用
    main.js只能引入一个组件，App.vue不会动
    在App.vue中引入其他组件，components和data、methods同级别
  3-组件组合
    在vue中，父子组件的关系可以总结为prop向下传递，事件向上传递。父组件通过prop给子组件下发数据，子组件通过事件给父组件发送消息
      父亲传递给儿子：子组件中定义props对象，和data同级别
        基本数据类型、默认值、必选项、复杂的对象
      儿子传递给父亲：
        儿子通过点击事件，触发一个发送数据的方法
        父亲接收一个数据
11、插槽
  1-插槽用于父子组件之间，传递视图，prop只能传递基本数据
    子组件加<slot></slot>标签
    父组件在子组件标签中，加视图代码
    父组件把东西渲染好后，塞到子组件里显示
  2-具名插槽
    可以有多个
    在组件的标签里添加插槽
  3-插槽中的数据传递是翻过来的：儿子把数据传给父亲，父亲拿数据渲染到视图上，把视图传给儿子进行显示
    只要出现多个插槽，请始终为所有的插槽使用完整的基于<template>的语法
12、组件缓存
  keep-alive标签
  如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染（组件切换后，之前的可以缓存）
  vue组件不被重新加载
13、组件生命周期
  https://cn.vuejs.org/images/lifecycle.png
  new Vue()：创建一个vue实例，相当于一个vue组件
  beforeCreate：组件被创建之前
  created：组件被创建之后
  beforeMount：组件被渲染之前
  mounted：组件被渲染之后
    beforeUpdate：当数据改变之前，触发一个函数
    updated：数据改变之后，再触发一个函数
  beforeDestroy：组件被销毁之前
  destroyed：组件销毁之后
14、过渡与动画
  真正开发中，css动画是主要使用，js能不使用就不使用
    在CSS过渡和动画中自动应用class
    可以配合使用第三方CSS动画库，如Animate.css
  1-所有要执行的动画效果，必须放在transition这个标签内（过渡）
  2-transition提供了6种css的动画效果
    v-enter：定义进入过渡的开始状态
    v-enter-active：定义进入过渡生效时的状态
    v-enter-to：定义进入过渡的结束状态
    v-leave：定义离开过渡的开始状态
    v-leave-active：定义离开过渡生效时的状态
    v-leave-to：定义离开过渡的结束状态
  3-https://cn.vuejs.org/images/transition.png
    进入之前，执行v-enter
    进入之后，执行v-enter-to
    进入的执行过程，执行v-enter-active
    离开之前，执行v-leave
    离开之后，执行v-leave-to
    离开的过程，执行v-leave-active
15、自定义指令
  v-bind、v-on是系统提供的指令
  全局写法
    vue对象绑定directive
  局部写法
    directives，和data同级别
16、钩子函数
  在自定指令里不仅有inserted
17、过滤器
  {{ d1 | author}}
  数据 + 管道符号 + 过滤器名
18、axios
19、操作原生真实的dom元素
  通过ref定义，refs获取真实的dom节点
  不建议这么操作
20、vue简写
  v-bind的简写：v-bind:href --> :href
  v-on的简写：v-on:click --> @click

==========小技巧==========
1、初始化项目
vue init webpack L01_VueBase
2、App.vue中template标签只能有一个根元素div
3、import必须写在script标签内
4、import后的名称和组件名称不能一样
5、v-bind:简写就是冒号，v-bind:is --> :is
6、transaction标签里只能有一个根元素div

==========目录结构==========
L01_VueBase
├─.babelrc：babel配置文件
├─.editorconfig
├─.gitignore：git文件忽略
├─.postcssrc.js：自动给css加前缀
├─build：webpack文件
├─config：项目配置文件
├─index.html
├─package.json：描述文件（依赖）
├─README.md：md文件
├─src：源码文件
│   │  App.vue
│   │  main.js（入口文件）
│   │
│   ├─assets
│   │      logo.png
│   │
│   └─components
│           HelloWorld.vue
└─static：外部资源文件
