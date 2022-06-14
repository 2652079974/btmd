<template>
  <div class="goods-info-content">
    <Header></Header>
    <div class="goods-info-container">
      <div class="top-catalog iconfont">
        <a href="#/" style="font-size:.8rem">首页</a> &#xe62d; 商品详情
      </div>
      <div class="show-goods-box">
        <div class="goods-img">
          <a href="" :title="name">
            <img :src="src" :alt="name">
          </a>
        </div>
        <div class="goods-info">
          <h1 class="goods-info-title">
            {{ name }}
          </h1>
          <p class="goods-info-price info">
            价格：{{ price.split('/')[0] }}
          </p>
          <p class="goods-info-weight info">
            规格：{{ price.split('/')[1] }}
          </p>
          <form action="" class="goods-number-box info">选购数量：
            <div class="align-box">
              <input class="reduce" type="button" value="-" @click="number--">
              <input type="text" class="goods-number" v-model="number" name="" id="">
              <input class="add" type="button" value="+" @click="number++">

            </div>
          </form>
          <div class="describe-box info">
            <button @click.prevent="addNewGoods">
              加入购物车
            </button>
          </div>
        </div>
      </div>
      <div class="poster">
        <div class="tabhost">
          <router-link class="tab" to="">商品展示</router-link>
          <router-link class="tab" to="">商品参数</router-link>
          <router-link class="tab" to="">质量保证</router-link>
          <router-link class="tab" :to="'/goodsInfo/' + this.id + '/comment'">商品评价</router-link>
        </div>
        <div class="tabPage">
          <router-view></router-view>
        </div>
      </div>

    </div>
    <Footer></Footer>

  </div>
</template>

<script>
import Footer from '../../footer/Footer.vue';
import Header from '../../header/Header.vue';
import EventBus from '@/js/EventBus';

export default {
  components: { Header, Footer },
  data() {
    return {
      number: 1,
      id: 0,
      src: "",
      name: "",
      price: "",
      describe: "",
      isNew: false,
      isHot: false,
    }
  },
  created() {
    this.id = this.$route.params.id
    let goodsArr = JSON.parse(window.sessionStorage.getItem("goodsItem"))
    let goodsItem = goodsArr.find(item => item.id == this.id)
    this.src = goodsItem.src
    this.name = goodsItem.name
    this.price = goodsItem.price
    this.describe = goodsItem.describe
    this.isNew = goodsItem.isNew
    this.isHot = goodsItem.isHot

  },
  updated() {
    if (this.number < 1) {
      this.number = 1;
    }
  },
  methods: {
    addNewGoods() {
      EventBus.$emit('addNewItem', this.id, this.number)
    }
  },

}
</script>
<style lang="less" scoped>
.goods-info-content {
  position: relative;
  z-index: 1;

  .goods-info-container {
    margin-left: 12.5%;
    margin-top: 2rem;
    width: 75%;

    .top-catalog {
      box-sizing: border-box;
      width: 100%;
      padding-left: 1rem;
      height: 3rem;
      line-height: 3rem;
      font-size: .8rem;

    }

    .show-goods-box {
      padding: .5rem;
      box-sizing: border-box;
      width: 100%;
      height: 20rem;
      border-radius: .5rem;
      overflow: hidden;
      background-color: rgba(255, 255, 255, .3);
      box-shadow: 4px 4px 8px rgba(0, 0, 0, .2);

      .goods-img {
        height: 100%;
        width: 20rem;
        border-radius: .5rem;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, .2);
        overflow: hidden;
        display: inline-block;

        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          background-color: white;

          img {
            width: 60%;
            height: 70%;
            margin: 15% 20%;
          }
        }
      }

      .goods-info {
        float: right;
        height: 100%;
        width: 40rem;
        padding-left: 2rem;
        box-sizing: border-box;

        .info {
          font-size: .8rem;
          margin-bottom: .5rem;
          border-bottom: 1px inset rgba(0, 0, 0, .1);
          padding: .3rem 0;
        }

        h1 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: .5rem;
          text-align: center;
        }

        .goods-number-box {
          height: 1.5rem;
          line-height: 1.5rem;

          .align-box {
            display: inline-block;
            height: 1.2rem;
          }

          input {
            float: left;
            height: 100%;
            width: 2rem;
            border: 1px solid rgba(0, 0, 0, .3);
            outline: none;
            margin: 0 .1rem;
            text-align: center;
            border-radius: .5rem;
            font-size: .8rem;
            box-sizing: border-box;
          }

          input[type="button"] {
            cursor: pointer;
            width: 1.5rem;
            font-size: 1rem;
          }
        }

        button {
          cursor: pointer;
          font-size: .7rem;
          font-weight: 700;
          width: 8rem;
          height: 1.5rem;
          border: none;
          border-radius: .75rem;
          outline: none;
          background-color: rgba(255, 255, 255, .2);
          box-shadow: 2px 2px 6px rgba(0, 0, 0, .1),
            -2px -2px 4px rgba(255, 255, 255, .8),
            inset 0 0 0 rgba(0, 0, 0, .1),
            inset 0 0 0 rgba(255, 255, 255, .1);
          transition: .3s all;

          &:hover {
            background-color: rgba(255, 255, 255, .4);
          }

          &:active {
            font-size: .65rem;
            box-shadow: 0 0 0 rgba(0, 0, 0, .1),
              0 0 0 rgba(255, 255, 255, .8),
              inset -2px -2px 3px rgba(0, 0, 0, .2),
              inset 2px 2px 3px rgba(255, 255, 255, .5);
          }
        }
      }
    }

    .poster {
      margin-top: 2rem;

      .tabhost {
        width: 100%;
        height: 1.4rem;

        .tab {
          cursor: pointer;
          height: 100%;
          line-height: 1.4rem;
          font-size: .8rem;
          display: inline-block;
          margin-right: .4rem;
          padding: 0 .5rem;
          background-color: white;
        }

      }

      .tabPage {
        width: 100%;
        height: 30rem;
        background-color: white;
      }
    }
  }
}

.goods-info-title {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
}
</style>