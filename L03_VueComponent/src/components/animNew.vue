<template>
    <div>
        内容：
        <button v-on:click="change" name="button" type="button">去吧</button>
        <!-- <transition name="hello"> -->
        <transition name="custom-classes-transition"
            enter-active-class="animated rotateInUpRight"
            leave-active-class="animated rotateOutDownLeft">
            <p class="myhello" v-show="flag">哈哈</p>
            
        </transition>
    </div>
</template>

<script>
export default {
    name: "animNew",
    data() {
        return {
            flag: true
        }
    },
    methods: {
        change() {
            if (this.flag) {
                this.flag = false;
            } else {
                this.flag = true;
            }
            
        }
    }
}
</script>

<style>

.hello-leave, .hello-enter-to {
    opacity: 1; /* 不透明度 */
    transform: translateX(0px); /*移动坐标 */
}
.hello-leave-to, .hello-enter {
    opacity: 0;
    transform: translateX(100px);
}
.hello-leave-active, .hello-enter-active {
    transition: all 2s ease; /*过渡效果 */
}
.myhello {
    left: 50%;
    position: absolute;
}
</style>