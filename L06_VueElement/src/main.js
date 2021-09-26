// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select, Option, Step, Steps } from 'element-ui';

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Step)
Vue.use(Steps)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
