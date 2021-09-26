1、Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
基于data
比如：登录状态，任何组件当中都可以读取

2、它采用集中式存储管理应用的所有组件的状态
类似于svn集中式共享

3、VueX
  状态管理模式（可以做到状态共享）
  demo组件要使用helloworld和hi组件中的值，怎么办？
  如果helloworld和demo有共同的子级，或共同的父级，就可以间接的传递数据了——App.vue
  helloworld.vue --> 发给App.vue --> 发给Hi.vue
  如果有一个页面还好，但是页面之间关系复杂就不能用了

4、安装
cnpm install vuex --save

5、VueX数据流程
https://vuex.vuejs.org/vuex.png
绿色虚线的是vuex
view通过一个Dispatch事件，触发一个Action，通过Commit方案，提交给Mutations
Mutations是做计算的，改变了数据、还是增加了数据、还是减少了数据
响应给State
Render渲染，返给view

没有VueX：
View -> Actions -> State -> View

有VueX：
VueComponent -> (dispatch) Actions -> (Commit) Mutations -> (Mutate) State -> (Render) -> VueComponent

6、computed
数据不改变就不会重新计算，数据改变了才会重新计算

7、VueX的使用场景
数据共享，比如登录，在任意页面退出，都不能查看页面

8、getters过滤
getters也是一个对象，跟state、mutations一样
读取方法从读取state改成读取getters：
$store.state.count
变为
$store.getters.getState

9、Action
Action提交的是mutation，而不是直接变更状态。
Action可以包含任意异步操作。
注意：mutation只能做同步处理

10、使用分文件的方式来管理store
store:
  index.js
  actions.js
  getters.js
  mutations.js
  state.js
