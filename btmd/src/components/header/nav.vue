<template>
    <ul class='rootnav'>
        <li>
            <a href="#/" title="首页">首页</a>
        </li>
        <li>
            <a href="javascript:;" title="新品速递">新品速递</a>
        </li>
        <li>
            <a href="javascript:;" title="热卖推荐">热卖推荐</a>
        </li>
        <li>
            <a href="javascript:;" title="商品分类">商品分类</a>
            <ul class="sub-nav">
                <li><a href="javascript:;" title="哈根达斯">哈根达斯</a></li>
                <li><a href="javascript:;" title="M&M'S">M&amp;M'S</a></li>
                <li><a href="javascript:;" title="本·杰瑞">本·杰瑞</a></li>
                <li><a href="javascript:;" title="德芙">德芙</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:;" title="品牌故事">品牌故事</a>
        </li>
        <li>
            <a href="javascript:;" title="会员活动">会员活动</a>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
    },

    data() {
        return {
        }
    },
    methods: {
        clicksub(item) {
            item.link = !item.link;
        }
    }
}
</script>

<style lang="less" scoped>
.rootnav {
    display: inline-block;
    height: 100%;

    >li {
        display: inline-block;
        height: 100%;

        >a {
            box-sizing: border-box;
            display: inline-block;
            height: 100%;
            padding: 0 1rem;
            line-height: 4rem;
            font-size: .80rem;
            // font-weight: 700;
            transition: .3s background-color;

            &:hover {
                color: rgb(255, 123, 0);
                padding-bottom: 1rem;
                background-color: rgba(255, 255, 255, .3);
                border-bottom: 2px solid rgb(255, 123, 0);
            }
        }
        &:hover{
            .sub-nav{
                visibility: visible;
            }
        }
    }
}

.sub-nav {
    // 这是子菜单
    position: absolute;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, .1);
    background-color: rgba(255, 255, 255, .8);
    border: 1px solid rgba(0, 0, 0, .1);
    margin-left: 2rem;
    padding-bottom: .5rem;
    visibility: hidden;

    li {
        display: block;

        >a {
            box-sizing: content-box;
            display: block;
            height: 1.8rem;
            width: 8rem;
            padding: 0 1rem;
            line-height: 1.5rem;
            font-size: 0.7rem;
            border-top: 0.1rem solid transparent;
            &::after{
                float: right;
                content: '';
                height: .3rem;
                width: .3rem;
                box-sizing: border-box;
                margin: .75rem 0 ;
                border: 2px solid black;
                border-left: none;
                border-bottom: none;
                transform: rotate(45deg);
            }
        }

        &:hover {
            background-color: rgba(1, 170, 212, 0.5);
            >a{
                color: white;
                &::after{
                    border-color: white;
                }
            }
        }
    }

}
</style>
