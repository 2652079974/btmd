<template>
    <div class="top-content iconfont" @click="toTop" v-show="isTop" ref="top">
        &#xe614;
    </div>
</template>

<script>
export default {
    // 判断当前是否已经在顶部
    data() {
        return {
            isTop: false
        }
    },
    methods: {
        // 回到顶部
        toTop() {
            // 缓动效果
            let timer = setInterval(() => {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                let speed = Math.floor(scrollTop / 10);
                document.documentElement.scrollTop = document.body.scrollTop = scrollTop - speed;
                if (scrollTop <10) {
                    clearInterval(timer);
                }
            }, 10);
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                this.isTop = true
            } else {
                this.isTop = false
            }
        })
    }


}
</script>
<style lang="less" scoped>
.top-content {
    cursor: pointer;
    position: absolute;
    z-index: 101;
    bottom: 2rem;
    right: 2rem;
    height: 2.5rem;
    width: 2rem;
    line-height: 2.5rem;
    text-align: center;
    font-size: 1.2rem;
    color: rgba(255,255,255, .5);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, .2);
    background: rgba(255, 255, 255, .3);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .3),
        -2px -2px 6px rgba(255, 255, 255, .6),
        inset 0 0 0  rgba(0,0,0, .3),
        inset 0 0 0  rgba(255, 255, 255, .6);
        // 禁止被选中文字
        user-select: none;
        

    border-radius: .5rem;
    transition: all 0.3s;

    &:hover {
        background: rgba(255, 255, 255, .5);
        color: rgba(255, 136, 0, 0.7);
    }
    &:active{
        font-size: 1.3rem;
        box-shadow: 0 0 0 rgba(0, 0, 0, .3),
        0 0 0 rgba(255, 255, 255, .6),
        inset 2px 2px 4px rgba(0,0,0, .3),
        inset -2px -2px 4px  rgba(255, 255, 255, .4);
    }
}
</style>