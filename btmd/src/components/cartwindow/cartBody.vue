<template>
    <div class="cart-content">
        <div class="click-area" ref="clickArea" @dblclick="showCart" title="双击弹出购物车">
            <Top></Top>
        </div>
        <div class="cart-body" ref="cartBody" @contextmenu.prevent="" >
            <!-- 购物车标题区域 -->
            <h1 class="cart-title" @dblclick="hideCart"> 
                <!-- 全选功能 -->
                <span class="check-all" @click="checkAll()" :title="checkHint">{{checkHint}}</span>
                <!-- 购物车标题，关闭购物车功能 -->
                <h1 class="iconfont" @click="hideCart" title="点击关闭购物车"> &#xe899;购物车</h1>
            </h1>
            <!-- 渲染表项区域 -->
            <div class="cart-list"  @dblclick.self="hideCart">
                <CartItem 
                    class="cart-list-item"
                    v-for="item in cartList" 
                    :key="item.id" 
                    :item="item" 
                    @deleteItem="deleteItem" 
                />
            </div>

            <!-- 结算区域——开始 -->
            <div class="settlement-amount"  @dblclick="hideCart">
                <div class="settlement-amount-left">
                    <span>已选商品</span>
                    <span>共<span class="amount"> {{ amount }} </span>件商品</span>
                </div>
                <div class="settlement-amount-right">
                    <span>合计：<span class="total"> {{ total }} </span>元</span>
                    <button>去结算</button>
                </div>
            </div>
            <!-- 结算区域——结束 -->
        </div>

    </div>
</template>

<script>
import CartItem from './cartGoodsItem.vue'
import EventBus from '@/js/EventBus'
import Top from '@/components/other/Top.vue'

export default {
    components: { CartItem  , Top },
    data() {
        return {
            cartList: [],
            checkHint:'全选',
        }
    },
    created() {
        EventBus.$on('addNewItem', (id,num) => {
            this.addItem(id,num)
        })
    },
    computed: {
        amount() {
            let arr = this.cartList.filter(item => item.isChecked)
            let temp = 0;
            arr.forEach(item => {
                temp += item.num
            })
            return temp
        },
        total() {
            return this.cartList.filter(item => item.isChecked).reduce((total, item) => {
                return parseFloat(total) + parseFloat(item.total)
            }, 0)
        },
    },
    methods: {
        addItem(id,num = 1) {
            // 获取到添加的商品id先判断是否已经存在于购物车中
            if (!this.cartList.some(item => {
                if (item.id == id) {
                    item.num+=num
                    return true
                }
            })) {
                let goodsItem = JSON.parse(window.sessionStorage.getItem('goodsItem'))
                let temp = goodsItem.find(item => item.id == id)
                this.cartList.push({
                    id: id,
                    num: num,
                    total: temp.price.split('/')[0],
                    isChecked: true,
                })
            }
        },
        deleteItem(id) {
            this.cartList = this.cartList.filter(item => item.id != id)
        },
        showCart() {
            this.$refs.cartBody.style.right = '0rem'
            this.$refs.clickArea.style.right = '-15%'
        },
        hideCart() {
            this.$refs.cartBody.style.right = '-20rem'
            this.$refs.clickArea.style.right = '0'
        },
        checkAll() {
            if(this.cartList.every(item => item.isChecked)){
                this.cartList.forEach(item => {
                    item.isChecked = false
                })
            }else{
                this.cartList.forEach(item => {
                    item.isChecked = true
                })
            }
        },

    },
    updated() {
        if(this.cartList.every(item => item.isChecked)){
            this.checkHint = '取消全选'
        }else{
            this.checkHint = '全选'
        }
    }

}
</script>
<style lang="less" scoped>
.click-area{
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    width: 15%;
    height: 100%;
    transition: .5s all;
}
.cart-body {
    position: fixed;
    z-index: 100;
    top: 0;
    right: -20rem;
    width: 20rem;
    height: 100%;
    background:linear-gradient(to bottom right,rgba(161, 96, 177,.4),rgba(19, 250, 192,.4),rgba(144, 232, 225,.4));
    box-shadow: -3px -3px 9px rgba(0, 0, 0, .2);
    overflow: hidden;
    transition: .5s all;
    border-left: 1px solid white ;

    h1 {
        position: relative;
        display: block;
        height: 2rem;
        font-size: 1.3rem;
        text-align: center;
        background-color: rgba(0, 0, 0, .2);
        box-shadow: 2px 2px 4px rgba(0, 0, 0, .2),
            -2px -2px 4px rgba(255, 255, 255, .6);
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
        user-select: none;
        >h1{
            cursor: pointer;
            display: inline-block;
            background-color: transparent;
            box-shadow: none;
        }
        
        .check-all {
            cursor: pointer;
            position: absolute;
            display: inline-block;
            width: 4rem;
            text-align: center;
            top: 50%;
            left: .5rem;
            transform: translateY(-50%);
            font-weight: 400;
            font-size: .7rem;
            user-select: none;

            &:hover{
                color:red;
            }
        }
        
    }

    .cart-list {
        position: relative;
        height: 100%;
        overflow: scroll;
        padding-bottom: 5rem;
        box-sizing: border-box;
        .cart-list-item{
            margin-top: .5rem;
        }
    }

    .settlement-amount {
        position: absolute;
        bottom: 0;
        height: 3rem;
        width: 100%;
        background-color: rgba(0,0,0, .2);
        padding-left: 1rem;
        box-sizing: border-box;
        span {
            font-size: .8rem;
            color: white;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
        }

        button {
            cursor: pointer;
            position: absolute;
            right: 5%;
            top: 50%;
            padding: .4rem 2rem;
            transform: translateY(-50%);
            font-size: .8rem;
            border: none;
            background-color: rgba(255, 255, 255, .3);
            box-shadow: 2px 2px 6px rgba(0, 0, 0, .2),
                -2px -2px 6px rgba(255, 255, 255, .6),
                inset 0 0 0 rgba(0, 0, 0, .2),
                inset 0 0 0 rgba(255, 255, 255, .6);

            transition: .3s all;
            &:hover{
                background-color: rgba(255, 255, 255, .6);

            }
            &:active{
                font-size: .75rem;
                box-shadow: 0 0 0 rgba(0, 0, 0, .2),
                    0 0 0 rgba(255, 255, 255, .6),
                    inset 2px 2px 4px rgba(0, 0, 0, .2),
                    inset -2px -2px 4px rgba(255, 255, 255, .6);
            }
        }
    }
}
</style>