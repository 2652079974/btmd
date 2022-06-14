<template>
    <div class="box" @mouseover="showBtn()" @mouseleave="hideBtn()">
        <!-- 三个a标签相互切换位置 -->
        <a class="img1" ref="img1"></a>
        <a class="img2" ref="img2"></a>
        <a class="img3" ref="img3"></a>
        <ul>
            <!-- 渲染圆点 -->
            <li v-for="i in banner" :key="i.id">
                <a href="" v-if="curIndex == i.id" @click.prevent="" class="curdot"></a>
                <a href="" v-else @click.prevent="skipImg(i.id)"></a>
            </li>
        </ul>
        <!-- 左右切换按钮 -->
        <button @click="this.sl" v-show="this.btnvisible">
            <div class="arrowsL"></div>
        </button>
        <button @click="this.sr" v-show="this.btnvisible">
            <div class="arrowsR"></div>
        </button>
    </div>
</template>

<script>
export default {

    props: {
        bannerResource: {
            default: []
        }
    },
    data() {
        return {
            banner: this.bannerResource,
            autoPlayTimer: null,
            curLeft: null, curRight: null, curCenter: null,
            curIndex: 0, curLIndex: 0, curRIndex: 0,
            dicretion: 'right',
            btnvisible: false,

        }
    },
    methods: {
        slide(ref, dicretion) {
            if (dicretion === 'left') this.curIndex--;
            if (dicretion === 'right') this.curIndex++;
            if (this.curIndex < 0) this.curIndex = this.banner.length - 1;
            if (this.curIndex > this.banner.length - 1) this.curIndex = 0;
            this.curLIndex = this.curIndex - 1 < 0 ? this.banner.length - 1 : this.curIndex - 1;
            this.curRIndex = this.curIndex + 1 > this.banner.length - 1 ? 0 : this.curIndex + 1;

            var leftImg, rightImg, centerImg;
            for (let i in ref) {
                if (!ref[i]) return;
                if (ref[i].offsetLeft > 0) rightImg = ref[i];
                if (ref[i].offsetLeft < 0) leftImg = ref[i];
                if (ref[i].offsetLeft == 0) centerImg = ref[i];
            }
            this.curLeft = leftImg;
            this.curRight = rightImg;
            this.curCenter = centerImg;

            centerImg.style.backgroundImage = `url(${this.banner[this.curIndex].img})`;
            leftImg.style.backgroundImage = `url(${this.banner[this.curLIndex].img})`;
            rightImg.style.backgroundImage = `url(${this.banner[this.curRIndex].img})`;

            if (dicretion === "left") {
                rightImg.title = this.banner[this.curIndex].name;
                rightImg.href = this.banner[this.curIndex].href;
                this.slideLeft(leftImg, centerImg, rightImg);
            } else if (dicretion === "right") {
                leftImg.title = this.banner[this.curIndex].name;
                leftImg.href = this.banner[this.curIndex].href;
                this.slideRight(leftImg, centerImg, rightImg);
            }
        },
        slideLeft(left, center, right) {
            left.style.visibility = "hidden";
            center.style.visibility = "hidden";
            right.style.visibility = "visible";
            var temp = center.offsetLeft + 'px';
            center.style.left = left.offsetLeft + 'px';
            left.style.left = right.offsetLeft + 'px';
            right.style.left = temp;
        },
        slideRight(left, center, right) {
            right.style.visibility = "hidden";
            center.style.visibility = "hidden";
            left.style.visibility = "visible";
            var temp = left.offsetLeft + 'px';
            left.style.left = center.offsetLeft + 'px';
            center.style.left = right.offsetLeft + 'px';
            right.style.left = temp;
        }, sl() {
            this.slide(this.$refs, 'left');
            this.dicretion = 'left';
        }, sr() {
            this.slide(this.$refs, 'right');
            this.dicretion = 'right';
        },

        showBtn() {
            this.btnvisible = true;
            clearInterval(this.autoPlayTimer);
        },
        hideBtn() {
            this.btnvisible = false;
            this.autoPlay();
        },
        // 跳转图片
        skipImg(index) {
            if (this.curIndex < index) {
                for (let i = index - this.curIndex; i > 0; i--) {
                    this.slide(this.$refs, 'right');
                }
            }
            else if (this.curIndex > index) {

                for (let i = this.curIndex - index; i > 0; i--) {
                    this.slide(this.$refs, 'left');
                }
            }
        },

        autoPlay() {
            this.autoPlayTimer = setInterval(() => {
                this.slide(this.$refs, this.dicretion);
            }, 3000)
        }
    },
    created() {
        // 在页面渲染完毕后，初始化轮播图
        this.$nextTick(() => {
            this.$refs.img2.style.backgroundImage = `url(${this.banner[this.curIndex].img})`;
            this.$refs.img2.href = `${this.banner[this.curIndex].href}`;


        })
        // // 自动轮播
        this.autoPlay();
    },
    mounted() {
        setTimeout(() => {
            this.slide(this.$refs, 'left');
            // this.slide(this.$refs,'right');
        }, 0)

    }
}
</script>

<style lang="less" scoped>
.box {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .3);
    border-radius: .2rem;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3),
        -3px -3px 7px rgba(255, 255, 255, .8);
    overflow: hidden;

    >a {
        transition: .5s all;
        height: 100%;
        width: 100%;
        position: absolute;
        display: inline-block;
        background-repeat: no-repeat;
        background-size: cover;
    }


    .img1 {
        left: -100%;

    }

    .img3 {
        left: 100%;
    }

    ul {
        position: absolute;
        border-radius: .6rem;
        left: 50%;
        bottom: .2rem;
        transform: translate(-50%, 0);

        li {
            float: left;
            display: inline-block;
            margin: 0 .1rem;

            >a {
                display: inline-block;
                height: .5rem;
                width: .5rem;
                border-radius: 50%;
                box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.3);
                background-color: rgba(255, 255, 255, .6);
            }

            >.curdot {
                background-color: rgb(255, 105, 19);
            }
        }
    }

    button {
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        height: 100%;
        width: 5rem;
        background: linear-gradient(to right, rgba(0, 0, 0, .3), rgba(255, 255, 255, 0));
        transition: .3s all;

        >div {
            transition: .2s all;
        }

        &:hover {
            >div {
                border: 5px solid rgb(255, 105, 19);
                border-right: none;
                border-top: none;
            }
        }
    }

    button:last-child {
        background: linear-gradient(to left, rgba(0, 0, 0, .3), rgba(255, 255, 255, 0));
        right: 0;
        border-radius: .5rem 0 0 .5rem;

    }

    .arrowsL {
        margin-left: 0.4rem;
        display: inline-block;
        height: 1rem;
        width: 1rem;
        border: 5px solid rgba(0, 0, 0, 0.1);
        border-top: none;
        border-right: none;
        transform: rotate(45deg);
    }

    .arrowsR {
        margin-right: 0.4rem;
        display: inline-block;
        height: 1rem;
        width: 1rem;
        border: 5px solid rgba(0, 0, 0, 0.1);
        border-top: none;
        border-right: none;
        transform: rotate(-135deg);
    }

}
</style>