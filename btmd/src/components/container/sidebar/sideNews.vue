<template>
    <div class="box-sideNews" title="新闻">
        <h1>新闻</h1><a href="javascript:;" class="more" title="更多">更多 +</a>
        <ul>
            <li v-for="i in this.newsItem" :key="i.id" :title="i.title"><a :href="i.href">{{ i.title }}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsItem: [
                {
                    id: 0,
                    title: '奇人~伊拉克画家竟然这么用冰激凌！',
                    time: '2018-01-01',
                    href: 'javascript:;'
                },
                {
                    id: 1,
                    title: '冰激凌有助怀孕',
                    time: '2018-01-01',
                    href: 'javascript:;'
                },
                {
                    id: 2,
                    title: '英国政府鼓励市民吃冰激凌',
                    time: '2018-01-01',
                    href: 'javascript:;'
                },
                {
                    id: 3,
                    title: '吃冰激凌刺激大脑快乐区',
                    time: '2018-01-01',
                    href: 'javascript:;'
                },
                {
                    id: 4,
                    title: '奇人~伊拉克画家竟然这么用冰激凌！',
                    time: '2018-01-01',
                    href: 'javascript:;'
                },
                {
                    id: 5,
                    title: '冰激凌有助怀孕',
                    time: '2018-01-01',
                    href: 'javascript:;'
                },
                {
                    id: 6,
                    title: '英国政府鼓励市民吃冰激凌',
                    time: '2018-01-01',
                    href: 'javascript:;'
                },
                {
                    id: 7,
                    title: '吃冰激凌刺激大脑快乐区',
                    time: '2018-01-01',
                    href: 'javascript:;'
                },
            ]
        }
    }
    ,
    created() {

        /*
         * 在这里用ajax请求数据
         */
    },
}
</script>

<style lang="less" scoped>
.box-sideNews {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    border-radius: .2rem;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, .2),
        -2px -2px 4px rgba(255, 255, 255, .6);
    overflow: visible;

    ul {
        padding: .5rem 0;

        li {
            transition: all .3s;
            width: 100%;
            overflow: hidden;
            background: linear-gradient(to right, rgba(0, 0, 0, .0), rgba(255, 255, 255, 0));
            margin-bottom: .5rem;

            a {
                padding-left: .5rem;
                font-size: .65rem;
                display: block;
                height: 1.2rem;
                line-height: 1.2rem;
                width: 100%;
            }

            &:hover {
                width: 160%;

                >a {
                    color: white;
                }
            }
        }
    }

    h1 {
        box-sizing: border-box;
        display: block;
        padding: .2rem .5rem;
        border-bottom: 1px solid #ccc;
        font-family: '华文仿宋';
        font-size: 1rem;
        color: white;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, .3);
    }

    .more {
        cursor: pointer;
        position: absolute;
        right: .5rem;
        top: .3rem;
        font-size: .7rem;
        color: white;
        transition: .3s all;

        &:hover {
            color: rgb(255, 174, 0)
        }
    }
}
</style>