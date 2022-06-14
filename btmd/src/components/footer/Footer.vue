<template>
    <div class="footer-content">
        <div class="content">
            <div class="copyright">COPYRIGHT© 啊对对队</div>
            <span class="icp">闽 ICP 备xxxxxxxx号-1</span>
            <span class="licence">食品流通许可证 SPxxxxxxxxxxxxxxxx</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.footer-content {
    position: absolute;
    width: 100%;
    background-color: rgba(255,255,255, .2);
    margin-top: 2rem;
    padding: 2rem 0 1rem 0;
    border-top: 1px solid rgba(0, 0, 0, .2);

    .content {
        display: inline-block;
        position: relative;
        left: 50%;
        transform: translateX(-50%);

        >div {
            font-size: .7rem;
            text-align: center;
        }

        >span {
            font-size: .7rem;
        }
    }
}
</style>