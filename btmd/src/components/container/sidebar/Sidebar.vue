<template>
  <div class="news-bar-content">
    <h1 class="iconfont" title="我猜这里有你想要的">&#xe66c;推荐</h1>
    <table>
      <tr>
        <td>
          <Recommend class="partition"></Recommend>
        </td>
        <td>
          <Recommend title="热卖" :chooseHot="true" class="partition"></Recommend>
        </td>
        <td>
          <SideNews class="partition"></SideNews>
        </td>
        <td>
          <SideBanner class="sideBanner partition" :sidebanner="this.sideBarBanner"></SideBanner>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import SideBanner from './sideBanner.vue'
import SideNews from './sideNews.vue'
import Recommend from './recommend.vue'
import Newest from './newest_.vue'
export default {
  components: { SideBanner, SideNews, Recommend, Newest },
  data() {
    return {
      // 模拟ajax请求的广告数据
      sideBarBanner: [
        {
          name: '测试一',
          id: 0,
          img: require('../../../assets/image/ickbuy-ad.png'),
          href: 'a'
        },
        {
          name: '测试二',
          id: 1,
          img: require('../../../assets/image/ickbuy-more.png'),
          href: 'b'
        },
        {
          name: '测试一',
          id: 2,
          img: require('../../../assets/image/ickbuy_1.png'),
          href: 'c'
        },
        {
          name: '测试二',
          id: 3,
          img: require('../../../assets/image/ickbuy_2.png'),
          href: 'd'
        },
        {
          name: '测试一',
          id: 4,
          img: require('../../../assets/image/ickbuy_3.png'),
          href: 'e'
        },
        {
          name: '测试二',
          id: 5,
          img: require('../../../assets/image/ickbuy_4.png'),
          href: 'f'
        },
        {
          name: '测试一',
          id: 6,
          img: require('../../../assets/image/ickbuy_5.png'),
          href: 'g'
        },
        {
          name: '测试二',
          id: 7,
          img: require('../../../assets/image/ickbuy_6.png'),
          href: 'h'
        },
        {
          name: '测试一',
          id: 8,
          img: require('../../../assets/image/ickbuy_7.png'),
          href: 'i'
        },
      ]
    }
  }

}
</script>

<style lang='less' scoped >
.news-bar-content {
  display: inline-block;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 100%;
  border-radius: .2rem;
  // background-color: rgb(243, 244, 245);
  // box-shadow: 4px 4px 8px rgba(0,0,0,.2),
  //             -2px -2px 4px rgba(255,255,255,.6);
}


table {
  width: 100%;
  height: 25rem;

  tr {

    // background-color: cyan;
    td {
      vertical-align: top;
      width: 25%;
      height: 20rem;
      min-width: 12rem;
      // background-color: red;
      border-right: 1px rgba(0, 0, 0, .1) dashed;

    }
  }

  .partition {
    position: relative;
    z-index: 1;
    overflow: hidden;

    &::before {
      content: '';
      transition: .5s all;
      z-index: -1;
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      // background-color: rgba(255, 255, 255,.2);
      background: linear-gradient(to bottom right, rgba(0, 217, 255, 0.2) 0%, rgba(234, 0, 255, 0.2) 100%);
      transform-origin: top left;
      transform: rotate(-90deg);
      position: absolute;
      top: 0;
      left: 0;
    }

    &:hover {
      &::before {
        transform: rotate(0deg);
      }
    }

    &::after {
      content: '';
      transition: .5s all;
      z-index: -1;
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      // background-color: rgba(255, 255, 255,.2);
      background: linear-gradient(to bottom right, rgba(0, 217, 255, 0.2) 0%, rgba(234, 0, 255, 0.2) 100%);
      // background-color: red;
      transform-origin: bottom right;
      transform: rotate(-90deg);
      position: absolute;
      top: 0;
      left: 0;
    }

    &:hover {
      &::after {
        transform: rotate(0deg);
      }
    }
  }
}

h1 {
  float: left;
  display: block;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  height: 3rem;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  user-select: none;
  // background-color: red;
}
</style>