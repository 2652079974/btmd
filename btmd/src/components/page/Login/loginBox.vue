<template>

  <div class="box-loginbox">
    <Background />
    <form :action="action" method="post">

      <h1>登 录</h1>
      <div style="position: relative">
        <div class="iconfont">&#xe607;</div>
        <input type="text" class="username" name="username" v-model="username" @click="hideHint()" placeholder="用户名" />
      </div>
      <div style="position: relative">
        <div class="iconfont">&#xe75b;</div>
        <input type="password" class="password" name="password" v-model="password" @click="hideHint()"
          placeholder="密码" />
      </div>
      <div>
        <a href="javascript:;" class="foregetWords"> 忘记密码 </a>
        <a href="javascript:;" style="margin: 0 0.3rem; cursor: default"> | </a>
        <a href="javascript:;" class="register" @click="toggleBox()"> 注册</a>
      </div>
      <button @click.prevent="post" ref="loginBtn">登 录</button>
      <span class="wrongpassword" v-if="!correct">{{ hint }}</span>

    </form>
  </div>
</template>

<script>
import axios from "axios";
import bus from "../../../js/EventBus.js";
import Background from "./bacground.vue"
export default {
  components: {
    Background,
  },
  props: {
    action: {
      type: String,
      default: "http://124.93.196.45:10001/prod-api/api/login",
    },
  },
  data() {
    return {
      password: "",
      username: "",
      token: "",
      correct: true, hint: '', attempts: 0, waitTime: 10,
    };
  },
  updated() { },
  methods: {
    async post() {

      if (this.username.length < 6) {
        this.hint = '用户名长度不能小于6位!'
        this.correct = false;
        return;
      }
      if (this.password.length == 0) {
        this.hint = '密码不能为空!'
        this.correct = false;
        return;
      }
      if (this.password.length < 6) {
        this.hint = '密码长度不能小于6位!'
        this.correct = false;
        return;
      }
      let { data } = await axios.post(this.action, {
        username: this.username,
        password: this.password,
      });
      this.token = data.token;
      if (data.token) {
        // 拥有token，说明登录成功
        bus.$emit("token", {
          username: this.username,
          token: this.token,
        });
        window.localStorage.setItem("token", this.token);
        this.$router.push("/");
        window.localStorage.setItem("userAutoPad",JSON.stringify({
          userName: this.username,
          password: this.password,
        }));
        
      }
      else {
        this.attempts++;
        this.hint = '用户名或密码错误!'

        if (this.attempts >= 3) {
          this.$refs.loginBtn.disabled = true;
          this.$refs.loginBtn.style.cursor = 'not-allowed';
          this.$refs.loginBtn.style.opacity = '0.5';
          this.attempts = 0;
          this.hint = '密码错误,请等待' + this.waitTime + '秒后重试!';
          this.correct = false;
          setTimeout(() => {
            this.hint = '';
            this.$refs.loginBtn.disabled = false;
            this.$refs.loginBtn.style.cursor = 'pointer';
            this.$refs.loginBtn.style.opacity = '1';
            this.correct = true;
          }, this.waitTime * 1000);
        }
        this.correct = false;
        this.password = '';
      }
    },
    hideHint() {
      this.correct = true;
      this.hint = '';
    },
    toggleBox() {
      this.$emit('toggleBox');
    }

  },
  created(){
    let pad = JSON.parse( window.localStorage.getItem("userAutoPad"));
    this.username = pad.userName
    this.password = pad.password
  }
  ,
  updated() {

  }
};
</script>

<style lang="less" scoped>
.box-loginbox {
  display: inline-block;

  >form {
    position: relative;
    width: 15rem;
    height: 25rem;
    box-sizing: border-box;
    padding-top: 1rem;
    border-radius: 0.5rem;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4),
      -2px -2px 5px rgba(255, 255, 255, 0.8);

    // 字体图标
    .iconfont {
      position: absolute;
      display: inline-block;
      left: 2.8rem;
      top: 50%;
      transform: translate(0, -50%);
    }

    // 标题
    h1 {
      position: relative;
      z-index: 1;
      margin-bottom: 2rem;
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
      color: rgba(77, 204, 255, 1);
      text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2),
        -1px -1px 1px rgba(255, 255, 255, 0.5);
      font-family: "幼圆";
    }

    // 输入框
    input,
    button {
      display: block;
      outline: none;
      border: none;
      box-sizing: border-box;
      padding-left: 1.8rem;
      border-radius: 0.75rem;
      font-size: 0.6rem;
      height: 1.5rem;
      width: 70%;
      margin: 1rem auto;
      margin-bottom: 0.5rem;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
      background-color: rgba(255, 255, 255, 0.6);
      transition: all 0.3s;

      &:hover,
      &:focus {
        background-color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(77, 204, 255, 1);
      }
    }

    button {
      transition: all 0.2s;
      cursor: pointer;
      position: relative;
      z-index: 1;
      padding: 0;
      height: 1.8rem;
      border-radius: 0.9rem;
      background-color: rgba(0, 119, 255, 0.2);
      font-size: 0.9rem;
      color: white;
      font-family: "微软雅黑";
      font-weight: 700;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2),
        -2px -2px 6px rgba(0, 183, 255, 0.2),
        inset 2px 2px 3px rgba(255, 255, 255, 0.8),
        inset 0 0 0 rgba(0, 0, 0, 0.4);

      &:hover,
      &:focus {
        border: none;
        background-color: rgba(0, 119, 255, 0.2);
      }

      &:hover {
        background-color: rgba(0, 255, 255, 0.3);
      }

      &:active {
        font-weight: 700;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(0, 183, 255, 0.2),
          inset -2px -2px 3px rgba(255, 255, 255, 0.8),
          inset 2px 2px 4px rgba(0, 0, 0, 0.4);
        font-size: 0.85rem;
      }
    }

    // 注册&忘记密码
    >div>a {
      font-size: 0.6rem;

      &:hover {
        color: rgb(0, 119, 255);
      }
    }

    >div:last-of-type {
      position: relative;
      display: inline-block;
      width: 70%;
      margin-left: 15%;

      >a {
        float: right;
      }
    }
  }
}

.wrongpassword {
  display: block;
  text-align: center;
  position: relative;
  font-size: .6rem;
  color: rgb(255, 0, 0);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}
</style>