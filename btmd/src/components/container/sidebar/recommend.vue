<template>
  <div class="recommend-content" title="推荐">
    <!-- 推荐模块标题 -->
    <h1>{{ title }}</h1><a href="javascript:;" class="more" title="更多">更多 +</a>
    <ul class="recommend-list">
      <!-- # 渲染模块表项——开始 -->
      <li v-for="i in recommendList" :key="i.id">
        <!-- 使用a标签包裹内容 -->
        <a class="" :href="'#/goodsinfo/' + i.id">
          <h1 class="recommend-item-title">
            <div>{{ i.name }}</div>
          </h1>
          <!-- 图片 -->
          <img :src="i.src" alt="">

          <!-- ## 描述区域——开始 -->
          <div class="describe-box">

            <!-- 价格 -->
            <p>价格：{{ i.price }}</p>
            <!-- 描述 -->
            <p>{{ i.describe }}</p>

          </div>
          <!-- ## 描述区域-结束 -->
        </a>
      </li>
      <!-- # 渲染模块表项——结束 -->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "最新",
    },
    chooseHot: {
      default: false
    },
  },
  data() {
    return {
      recommendList: []
    }
  },
  mounted() {
    setTimeout(() => {
      if (!this.chooseHot) {
        this.recommendList = JSON.parse(window.sessionStorage.getItem('goodsItem')).filter(item => item.isNew == true)
      } else {
        this.recommendList = JSON.parse(window.sessionStorage.getItem('goodsItem')).filter(item => item.isHot == true)
      }
    }, 0);

  }
}
</script>
<style lang="less" scoped>
.recommend-content {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  border-radius: .2rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, .2),
    -2px -2px 4px rgba(255, 255, 255, .6);
  overflow: visible;

  ul {
    margin-top: .5rem;

    >li {
      height: 1.4rem;
      overflow: hidden;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
      background-color: rgba(255, 255, 255, .1);

      transition: .3s all;

      >a {
        display: block;
        // background-color: cyan;

        .describe-box {
          float: right;
          width: 60%;
          height: 2rem;
          padding-top: .5rem;

          >p {
            display: inline-block;
            width: 100%;
            font-size: .6rem;
          }
        }
      }

      .recommend-item-title {
        display: block;
        font-size: .8rem;
        padding-left: 1rem;
      }

      img {
        width: 30%;
        border-radius: 5%;
        margin: 5%;
      }

      h1>div {
        position: relative;
        display: inline-block;
        left: 0;
        transform: translateX(0);
        transition: .3s all;
        font-size: .8rem;
        font-family: '黑体';
        font-weight: 400;
        color: white;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, .2);
      }

      &:hover {
        height: 7.5rem;
        background-color: rgba(0, 204, 255, 0.144);

        h1 {
          padding: .2rem 0rem;

          >div {
            left: 50%;
            transform: translateX(-50%);
            font-size: 1rem;
            font-weight: 700;
            color: white;
            text-shadow: 2px 2px 3px rgba(0, 0, 0, .2);
          }
        }
      }
    }
  }
}

h1 {
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: .2rem .5rem;
  text-align: left;
  border-bottom: 1px solid #ccc;
  font-family: '华文仿宋';
  font-size: 1rem;
  transition: .3s all;
  color: white;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, .3);
}

.more{
  cursor: pointer;
  position:absolute;
  right: .5rem; 
  top: .3rem; 
  font-size: .7rem; 
  color: white;
  transition: .3s all;
  &:hover{
    color:rgb(255, 174, 0)
  }
}
</style>