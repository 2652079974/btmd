<template>
    <div class="box-container">
        <Banner class="banner" :bannerResource="this.banner"></Banner>
        <MainContent class="mainContent"></MainContent>
    </div>
</template>

<script>
import Banner from '../container/banner.vue'
import MainContent from '../container/mainContent.vue'

export default {
    components: {
        Banner,
        MainContent,
    },
    data() {
        return {

            // 模拟ajax获取的数据
            banner: [
                {
                    name: '测试一',
                    id: 0,
                    img: require('../../assets/image/banner.png'),
                    href: 'a'
                },
                {
                    name: '测试二',
                    id: 1,
                    img: require('../../assets/image/banner2.png'),
                    href: 'b'
                },
                {
                    name: '测试三',
                    id: 2,
                    img: require('../../assets/image/banner.png'),
                    href: 'c'
                },
                {
                    name: '测试四',
                    id: 3,
                    img: require('../../assets/image/banner2.png'),
                    href: 'd'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.box-container {
    display: inline-block;
    position: relative;
    padding: 2rem 0;
    margin-left: 12%;
    padding: 3%;
    padding-bottom: 0;
    width: 70%;
}

.banner {
    height: 20rem;
}

.mainContent {
    padding: 1rem 0;
    margin-top: 2rem;
    border-radius: .2rem;
    width: 100%;
}
</style>