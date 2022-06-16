<template>
  <div class="user-window">
    <div class="">
      <a href="Javascript:;" class="logout" @click="loginPage()" v-if="!token">请登录</a>
    </div>
    <div @mouseleave="hide" v-if="token">
      <a href="" @mouseover="show" @click.prevent="" ref="userImg">
        <div>
          <img :src="img" alt="">
        </div>
      </a>
      <div class="user-info" ref="userInfo">
        <h1>{{ nickName }}</h1>
        <ul>
          <li>
            <a href="" @click.prevent="$router.push('/user')"><span class="iconfont">&#xe607;</span> 个人中心
              <div class="iconfont">&#xe88e;</div>
            </a>
          </li>
          <li>
            <a href=""><span class="iconfont">&#xe897;</span> 订单中心
              <div class="iconfont">&#xe88e;</div>
            </a>
          </li>
          <li>
            <a href="" @click.prevent=""><span class="iconfont">&#xe899;</span> 购物车
              <div class="iconfont">&#xe88e;</div>
            </a>
          </li>
          <li>
            <a href=""><span class="iconfont">&#xe66b;</span> 钱包
              <div class="iconfont">&#xe88e;</div>
            </a>
          </li>
          <li>
            <a href="" @click="logout()"><span class="iconfont">&#xe893;</span> 退出
              <div class="iconfont"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import bus from '../../..//js/EventBus.js'
export default {
  props: {
    loginStatus: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      visible: false,
      /* 用户头像 */
      img: require("../../../assets/image/goldrush.jpg"),
      nickName: '',
      token: '',
    }
  },
  methods: {
    show() {
      if (!this.visible) {
        let img = this.$refs.userImg;
        let info = this.$refs.userInfo;
        img.style.top = img.offsetTop * 4 + "px";
        img.style.left = info.offsetLeft * 0.8 + "px";
        img.style.transform = "scale(1.3)";
        info.style.visibility = "visible";
        info.style.opacity = "1";
      }
      this.visible = true;
    },
    hide() {
      this.visible = false;
      let img = this.$refs.userImg;
      let info = this.$refs.userInfo;
      img.style.top = 0 + "px";
      img.style.left = 0 + "px";
      img.style.transform = "scale(1)";
      info.style.visibility = "hidden";
      info.style.opacity = "0";
    },
    loginPage() {
      bus.$emit('changePage', 1)
    },
    logout() {
      window.localStorage.removeItem('token')
    }
  },
  mounted() {
    /* 解决渲染后第一次点击没有过渡动画的问题 */
    /* 判断是否有userImg对象如果有则执行立即执行函数 */

    // this.$refs.userImg&&(()=>{ 
    //     this.$refs.userImg.style.top = 0 + "px";
    //     this.$refs.userImg.style.left = 0 + "px";
    // })()

    // 抽象写法
    (ref => {
      ref && (ref => {
        ref.style.top = 0 + "px";
        ref.style.left = 0 + "px";
      })(ref)
    })(this.$refs.userImg)
  },
  created() {
    this.token = window.localStorage.getItem('token')
    // this.userInfo.token
    /* 在这里使用ajax请求数据 */
    async function temp(token, that) {
      let { data: { user } } = await axios.get('http://124.93.196.45:10001/prod-api/api/common/user/getInfo', {
        headers: {
          Authorization: token
        }
      })
      // that.img = "http://124.93.196.45:10001" + user.avatar
      that.nickName = user.nickName
    }
    temp(this.token, this)
  }
};
</script>
<style lang="less" scoped>
.user-window {
  >div {
    display: inline-block;
    position: relative;
    height: 100%;

    >a {
      cursor: pointer;
      position: relative;
      z-index: 1;
      margin: 0.5rem;
      display: block;
      transition: all 0.3s;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      overflow: hidden;
      background-color: rgba(255, 255, 255, 0.8);
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1),
        -2px -2px 2px rgba(255, 255, 255, 0.6);

      >div {
        height: 100%;
        >img {
          width: 100%;
          height: 100%;
        }
      }

    }

    .logout {
      text-align: center;
      line-height: 3rem;
      font-size: .8rem;
    }
  }

}

.user-info {
  transition: all 0.3s;
  display: inline-block;
  position: absolute;
  top: 4rem;
  left: -50%;
  transform: translate(-35%, 0);
  height: 25rem;
  width: 15rem;
  border-radius: 0.3rem;
  background-color: white;
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);


  >h1 {
    font-size: 1rem;
    margin-top: 2rem;
    text-align: center;
    color: rgb(255, 0, 0);
  }

  >ul {
    height: 100%;

    >li {
      >a {
        display: block;
        box-sizing: border-box;
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
        color: rgba(0, 0, 0, 0.8);

        span {
          font-size: 1rem;
          font-weight: 700;
        }

        div {
          display: inline-block;
          float: right;
        }

        &:hover {
          color: rgba(212, 1, 123, 1);
          background-color: #f5f5f5;
        }
      }
    }

    >li:last-of-type {
      position: absolute;
      display: block;
      width: 100%;
      bottom: 0;
    }
  }
}
</style>