<template>
    <div class="cart-goods-item-content">
        <div class="delete" @click="deleteItem()" title="点击删除">×</div>
        <!-- 商品图片展示区域 -->
        <div class="item-img">
            <input type="checkbox" v-model="goodsItem.isChecked" name="" id="">
            <a href="javascript:;">
                <img :src="src" alt="">
            </a>
        </div>
        <!-- # 列表表项操作区域——开始 -->
        <div class="operation-zone">
            <!-- 商品名 -->
            <h1>{{ name }}</h1>
            <!-- 商品价格 -->
            <div class="goods-price info">单价：{{ price }} </div>
            <!-- 商品数量增减操作 -->
            <form action="" class="goods-count info">数量：
                <input type="button" value="-" class="minus" @click.stop="goodsItem.num--">
                <input type="text" v-model="item.num" class="num">
                <input type="button" value="+" class="plus" @click.stop="goodsItem.num++">
            </form>
            <div class="goods-total-price info">总计：{{ total }} 元</div>
        </div>
        <!-- # 列表表项操作区域——结束 -->
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: {
                id: 1,
                num: 1,
                total: 0,
                isChecked: true,
            }
        }
    },
    data() {
        return {
            goodsItem: this.item,
            name: '',
            price: '',
            src: '',
        }
    },
    computed: {
        total() {
           return parseFloat(this.price) * this.item.num
        },
    },
    created() {

    },
    mounted() {
        let goods = JSON.parse(window.sessionStorage.getItem('goodsItem'))
        let temp = goods.find(item => item.id == this.item.id)
        this.name = temp.name
        this.src = temp.src
        this.price = temp.price.split('/')[0]
        console.log(this.price)
    },
    updated() {
        if (this.num < 0) {
            this.num = 0
        }
        this.item.total = this.total
    },
    methods:{
        deleteItem() {
            this.$emit('deleteItem', this.item.id)
        },
    }
}
</script>

<style lang="less" scoped>
.cart-goods-item-content {
    cursor: pointer;
    position: relative;
    height: 5rem;
    width: 90%;
    margin: 0 auto;
    padding: .5rem 0;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, .2);
    background-color: rgba(255, 255, 255, .3);
    overflow: hidden;
    transition: .3s all;
    user-select: none;

    &::before{
        content: '';
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.001rem;
        height: 0.001rem;
        background:linear-gradient(to right,rgba(0, 250, 250, 0.3),rgba(252, 0, 218, 0.2) );
        border-radius: 50%;
        transition: .6s all;

    }
    &:hover{
        &::before{
            background-color: rgba(255, 255, 255, .3);
            width: 25rem;
            height: 25rem;
        }
        .delete{
            opacity: 1;
        }
        transform: scale(1.1);
    }

    .delete{
        cursor: pointer;
        position: absolute;
        right: .5rem;
        top: 0.5rem;
        background-color: rgba(255, 255, 255, .6);
        font-size: 1.2rem;
        width: 1.1rem;
        height: 1.1rem;
        line-height: 1.1rem;
        text-align: center;
        color: rgba(0, 0, 0, .5);
        font-weight: 400;
        border-radius: .1rem;
        display: inline-block;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, .2),
            -1px -1px 3px rgba(255, 255, 255, .6);
            opacity: 0;

        &:hover{
            background-color: rgba(255, 11, 11, 0.6);
            color: white;
        }
    }
    .item-img {
        display: inline-block;
        height: 100%;
        position: relative;

        input[type="checkbox"] {
            position: absolute;
            top: -.5rem;
            width: 1rem;
            height: 1rem;
            margin-right: .5rem;
            cursor: pointer;
        }

        >a {
            display: inline-block;
            height: 90%;
            width: 4.5rem;
            margin: 0.25rem;
            margin-left: .5rem;
            border-radius: .2rem;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
            overflow: hidden;

            >img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }

    .operation-zone {
        float: right;
        height: 100%;
        width: 12rem;
        box-sizing: border-box;

        h1 {
            text-align: left;
            font-size: .75rem;
            font-weight: 700;
            color: white;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
        }

        .goods-count {
            input {
                height: 100%;
                width: 1.5rem;
                vertical-align: middle;
                outline: none;
                border: none;
                font-size: .8rem;
                text-align: center;

                &[type="button"] {
                    width: 1.2rem;
                    cursor: pointer;
                }
            }
        }

        .info {
            font-size: .7rem;
            height: 1rem;
            margin-bottom: .2rem;
        }
    }


}
</style>