import Vue from 'vue'
//引入使用vuex
import Vuex from 'vuex'
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';
Vue.use(Vuex)

//创建store
//注意，创建对象一定要在注入对象之前，否则会找不到属性
//const store = new Vuex.Store({
export default new Vuex.Store({
  // state: {
  //   count: 0,
  //   isLogin: false
  // },
  state: state,  //提取出state对象
  mutations: mutations,
  getters: getters,
  actions: actions
})