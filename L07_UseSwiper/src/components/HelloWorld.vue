<template>
  <div class="hello">
    <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides" v-bind:key="slide">
      I'm Slide {{ slide }}
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          }
        },
        swiperSlides: [1, 2, 3, 4, 5],
        weatherinfos: []
    }
  },
  mounted() {
    var url = this.HOST + "/data/sk/101010100.html";
    console.log(this.HOST);
    this.$axios.get(url)
    .then(res => {
      console.log(res.data.weatherinfo);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 400px;
  height: 350px;
}

.hello img {
  width: 400px;
  height: 350px;
}
</style>
