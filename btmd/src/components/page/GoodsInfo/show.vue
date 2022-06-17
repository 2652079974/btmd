<template>
  <div class="show-content">
    <img :src="showImgSrc" alt="">
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:0,
      showImgSrc:'',
    }
  },
  created(){

    // 获取商品id
    this.id = this.$route.params.id;

    let goodsItem = JSON.parse(window.sessionStorage.getItem('goodsItem'));
    console.log(goodsItem);
    // 在goodsItem中查找id为this.id的商品
    let goodsItemObj = goodsItem.find(item=>{
      return item.id == this.id;
    });
    this.showImgSrc = goodsItemObj.showImgSrc;
  }

}
</script>
<style lang="less" scoped>
    .show-content{
        height: 100%;
        width: 100%;
        img{
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>