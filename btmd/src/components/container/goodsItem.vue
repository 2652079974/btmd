<template>
  <div class="box-goods-item">
    <a :href="'#/goodsinfo/'+id" :title="name">
      <div class="goodsDescribe">{{ describe }}</div>
      <img :src="src" :alt="name" />
      <div class="hot" ><span v-if="isNew"> 新品 </span> <span v-if="isHot"> 热卖 </span></div>
    </a>
    <h1 :title="name">{{ name }}</h1>
    <p :title="price">规格:{{ price }}</p>
    <button title="加入购物车" @click="addEvent()">加入购物车</button>
  </div>
</template>

<script>
import EventBus from '@/js/EventBus';
export default {
  props: {
    href: {
      default: "",
    },
    src: {
      default: "",
    },
    name: {
      default: "冰淇淋",
    },
    price: {
      default: "",
    },
    add: {
      default: null,
    },
    id: {
      default: 1,
    },
    describe: {
      default: "这里是一段默认描述",
    },
    isNew: {
      default: false,
    },
    isHot: {
      default: false,
    },
  },
  methods: {
    addEvent() {
      EventBus.$emit('addNewItem', this.id);
    },
  },
};
</script>

<style lang="less" scoped>
.box-goods-item {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2),
    -2px -2px 5px rgba(255, 255, 255, 0.7), inset 0 0 0 rgba(255, 255, 255, 0.9),
    inset 0 0 0 rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  &:hover {
    margin-top: -0.3rem;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.3),
      -2px -2px 5px rgba(255, 255, 255, 0.7),
      inset 0 0 0 rgba(255, 255, 255, 0.9), inset 0 0 0 rgba(0, 0, 0, 0.4);
  }

  > a {
    position: relative;
    display: block;
    overflow: hidden;
    height: 70%;
    width: 100%;
    margin: auto;
    border-radius: 0.2rem;
    background-color: rgb(240, 240, 240);
    .hot{
      position: absolute;
      transform: rotate(-45deg);
      top: 1rem;
      left: -3rem;
      font-size: .8rem;
      z-index: 2;
      display: inline-block;
      width: 10rem;
      text-align: center;
      background-color: red;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      >span{
        color: white;
        font-size: .8rem;
      }
    }
    
    > img {
      width: 100%;
      height: 100%;
    }
    .goodsDescribe {
      position: absolute;
      bottom: -40%;
      width: 100%;
      height: 40%;
      color: white;
      background-color: rgba(0, 0, 0, 0.2);
      font-size: 0.75rem;
      font-weight: 400;
      padding: 0 0.2rem;
      transition: 0.3s all;
    }
    &:hover {
      .goodsDescribe {
        bottom: 0;
      }
    }
  }
  h1 {
    font-size: 0.75rem;
    text-align: center;
    margin-top: 0.2rem;
  }
  p {
    font-size: 0.6rem;
    color: rgba(66, 66, 66, 8);
    text-align: center;
    margin-top: 0.2rem;
    font-style: italic;
    &:hover {
      background-color: black;
      color: white;
    }
  }
  button {
    cursor: pointer;
    position: relative;
    bottom: 0;
    transition: all 0.2s;
    font-size: 0.7rem;
    width: 95%;
    height: 1.4rem;
    margin: 0.5rem 0%;
    margin-left: 2.5%;
    border: none;
    color: black;
    font-weight: 700;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2),
      0 0 0 rgba(255, 255, 255, 0.7),
      inset 0 0 0 rgba(255, 255, 255, 0.9), inset 0 0 0 rgba(0, 0, 0, 0.4);
    &:active {
      font-size: 0.65rem;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.4), 0 0 0 rgba(255, 255, 255, 0.7),
        inset -2px -2px 5px rgba(255, 255, 255, 0.9),
        inset 2px 2px 5px rgba(0, 0, 0, 0.4);
    }
    &:hover {
      background-color: rgba(255, 197, 89, 0.8);
      // color: white;
    }
  }
}
</style>