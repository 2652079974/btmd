<template>
    <div class="logo-content" @click='$router.push("/index")'>
        <div class="logo">
            <img src="../../assets/image/logo.png" alt="">
            <img src="../../assets/image/logo1.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            default: ''
        }
    },
}
</script>

<style lang="less" scoped>
.logo-content {
    position: relative;
    cursor: pointer;
    display: inline-block;
    height: 100%;
    width: 10rem;

    .logo {
        display: inline-block;
        transform-style: preserve-3d;
        position: relative;
        height: 100%;
        width: 10rem;
        transition: all .4s;

        img {
            position: absolute;
        }

        img:first-child {
            left: 1rem;
            top: 50%;
            z-index: 1;
            transform: translate3D(0, -50%, 1rem);
            height: 2rem;
        }

        img:last-child {
            height: 2.5rem;
            width: 9rem;
            transform: translateY(-50%) rotateX(90deg);
        }
    }

    &:hover .logo {
        transform: rotateX(-90deg);
    }
}
</style>
