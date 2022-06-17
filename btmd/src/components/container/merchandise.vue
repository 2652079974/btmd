<template>
    <div class="box" >
        <ul style='display:flex'>
            <li v-for="item in goodsItem" :key="item.id">
                <GoodsItem 
                    @clickAdd='getIdToPost'
                    :href="item.href"
                    :src="item.src"
                    :name="item.name"
                    :price="item.price"
                    :describe="item.describe"
                    :id="item.id"
                    :isHot="item.isHot"
                    :isNew="item.isNew"
                    >
                </GoodsItem>
            </li>
        </ul>
    </div>
</template>

<script>
import GoodsItem from './goodsItem.vue'

export default {
    components:{
        GoodsItem,
    },
    methods:{
        getIdToPost(item){
            /*
             *   在这里使用ajax提交数据
             */
            
        }
    },
    data(){
        return{
            // 暂时用来模拟数据
            goodsItem:[
                {
                    id:0,
                    name:"M&M'S巧克力豆冰激凌",
                    src:require('../../assets/image/mm.png'),
                    price:'68.00￥/268g',
                    describe:'这里是一段默认描述............',
                    isHot:true,
                    isNew:true,
                    showImgSrc:require('../../assets/image/1.png')
                },
                {
                    id:1,
                    name:'本·杰瑞草莓冰激凌',
                    src:require("../../assets/image/bjr.png"),
                    price:'74.00￥/420g',
                    describe:'这里是一段默认描述',
                    isHot:false,
                    isNew:true,
                    showImgSrc:require('../../assets/image/1.png')

                },
                {
                    id:2,
                    name:"M&M'S巧克力豆冰激凌",
                    src:require('../../assets/image/mm.png'),
                    price:'68.00￥/268g',
                    describe:'这里是一段默认描述',
                    isHot:true,
                    isNew:false,
                    showImgSrc:require('../../assets/image/1.png')
                },
                {
                    id:3,
                    name:'本·杰瑞草莓冰激凌',
                    src:require("../../assets/image/bjr.png"),
                    price:'74.00￥/420g',
                    describe:'这里是一段默认描述',
                    showImgSrc:require('../../assets/image/1.png')
                },
                {
                    id:4,
                    name:"M&M'S巧克力豆冰激凌",
                    src:require('../../assets/image/mm.png'),
                    describe:'这里是一段默认描述',
                    price:'68.00￥/268g',
                    isNew:true,
                    showImgSrc:require('../../assets/image/1.png')
                },
                {
                    id:5,
                    name:'本·杰瑞草莓冰激凌',
                    src:require("../../assets/image/bjr.png"),
                    describe:'这里是一段默认描述',
                    price:'74.00￥/420g',
                    showImgSrc:require('../../assets/image/1.png')
                },
                {
                    id:6,
                    name:"M&M'S巧克力豆冰激凌",
                    src:require('../../assets/image/mm.png'),
                    describe:'这里是一段默认描述',
                    price:'68.00￥/268g',
                    showImgSrc:require('../../assets/image/1.png')
                },
                {
                    id:7,
                    name:'本·杰瑞草莓冰激凌',
                    src:require("../../assets/image/bjr.png"),
                    describe:'这里是一段默认描述',
                    price:'74.00￥/420g',
                    isNew:true,
                    showImgSrc:require('../../assets/image/1.png')
                },
                
                {
                    id:8,
                    name:"M&M'S巧克力豆冰激凌",
                    src:require('../../assets/image/mm.png'),
                    describe:'这里是一段默认描述',
                    price:'68.00￥/268g',
                    showImgSrc:require('../../assets/image/1.png')
                },
                {
                    id:9,
                    name:'本·杰瑞草莓冰激凌',
                    src:require("../../assets/image/bjr.png"),
                    describe:'这里是一段默认描述',
                    price:'74.00￥/420g',
                    showImgSrc:require('../../assets/image/1.png')
                },
                
                
            ]
        }
    },
    created(){
        // 在这里使用ajax请求数据
    },
    mounted(){
        window.sessionStorage.setItem('goodsItem',JSON.stringify(this.goodsItem))
    }


}
</script>

<style lang="less" scoped>
.box{
    position: relative;
    width: 100%;
    height: 100%;
    
    ul{
        justify-content:space-between;
        align-items: center;
        flex-wrap: wrap;
        li{
            display: inline-block;
            width: 11em;
            height: 16rem;
            margin-right: 1.5rem;
            margin-bottom: 1rem;
        }
    }
}
</style>