<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <myNav/>
    <!--<router-view/>-->
    <router-view></router-view>
    
  </div>
</template>

<script>

import myNav from './components/nav.vue'

export default {
  name: 'App',
  components: {
    myNav
  }
}
</script>

<style>
body {
  background: #f1f1f1;
}

*{
  margin: 0;
  padding: 0;
}

a:link,a:hover,a:active,a:visited{
  color: #222;
}
</style>
