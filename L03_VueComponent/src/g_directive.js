import Vue from 'vue'

//全局自定义指令
//vue对象绑定directive，它有两个参数，第一个是指令名称，第二个是一个对象
Vue.directive('focus', {
    inserted: function(el) {
      el.focus();  //这里focus是方法
    }
  }
)

Vue.directive('mycss', {
  inserted: function(el) {
    el.style.color = "#f00";
  }
})
