<template>
    <div>
        动画：
        <button v-on:click="show = !show">
            Toggle
        </button>
        <transition name="fade"> <!-- 这里name="fade"和css中前缀有关联 -->
            <p v-if="show">hello</p>
            <p v-if="!show">demo</p>
        </transition>
    </div>
</template>

<script>
export default {
    name: "amin",
    data() {
        return {
            show: true
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
