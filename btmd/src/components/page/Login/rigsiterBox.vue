<template>
  <div class="box-registerBox">
    <Background class="background" />
    <form action="">
      <h1>注 册</h1>
      <!-- 账号 -->
      <div style="position: relative">
        <div class="iconfont">&#xe607;</div>
        <input type="text" placeholder="用户名" v-model="username" />
      </div>

      <!-- 密码 -->
      <div style="position: relative">
        <div class="iconfont">&#xe75b;</div>
        <input type="password" placeholder="密码" v-model="password" />
      </div>
      <!-- 确认密码 -->
      <div style="position: relative">
        <div class="iconfont">&#xe75b;</div>
        <input type="password" placeholder="确认密码" v-model="confirmPassword" />
      </div>
      <!-- 手机号 -->
      <div style="position: relative">
        <div class="iconfont">&#xe76d;</div>
        <input type="password" placeholder="手机号" v-model="phone" />
      </div>
      <!-- 昵称 -->
      <div style="position: relative">
        <div class="iconfont">&#xe607;</div>
        <input type="text" placeholder="昵称" v-model="nickname" />
      </div>
      <button @click.prevent="check()">注册</button>
      <span class="wrongpassword">{{ hint }}</span>
    </form>
    <div class="back iconfont" @click="back()">&#xe6ff;</div>

  </div>
</template>

<script>
import Background from "../../page/Login/bacground.vue";
import axios from "axios";

export default {
  components: {
    Background,
  },
  data() {
    return {
      hint: "",
      username: "",
      password: "",
      confirmPassword: "",
      phone: "",
      nickname: "",
      allow: false, tempFlag: false,
    };
  },
  methods: {
    async check() {
      // 立即执行函数，判断是否为空
      (() => {
        if (this.username.length == 0) {
          this.hint = "用户名不能为空！";
          return false;
        }
        if (this.password.length == 0) {
          this.hint = "密码不能为空！";
          return false;
        }
        if (this.confirmPassword.length == 0) {
          this.hint = "请输入确认密码！";
          return false;
        }
        if (this.phone.length == 0) {
          this.hint = "请输入手机号！";
          return false;
        }
        if (this.nickname.length == 0) {
          this.hint = "请输入昵称！";
          return false;
        }
      })();

      if (this.hint == "") {
        if (this.password != this.confirmPassword) {
          this.hint = "两次输入的密码不一致！";
          return false;
        }
      }


      if (this.allow) {
        let { data } = await axios.post("http://124.93.196.45:10001/prod-api/api/register", {
          userName: this.username,
          password: this.password,
          nickName: this.nickname,
          sex: 0,
          phonenumber: this.phone,
        })
        if (data.code == 200) {
          alert("注册成功")
          window.localStorage.setItem("userAutoPad", JSON.stringify({
            userName: this.username,
            password: this.password,
          }));
          this.back()
        }else{
          this.hint = data.msg
          this.tempFlag = true
        }

      }
    },

    back() {
      this.$emit("back");
    }
  },
  updated() {
    const usernameReg = /^[a-zA-Z0-9_]{6,16}$/;
    if (!usernameReg.test(this.username) && this.username.length > 0) {
      this.hint = "用户名只能由6-16位字母、数字、下划线组成！";
      this.allow = false;
      return false;
    }

    const passwordReg = /^[a-zA-Z0-9_]{6,16}$/;
    if (!passwordReg.test(this.password) && this.password.length > 0) {
      this.hint = "密码只能由6-16位字母、数字、下划线组成！";
      this.allow = false;
      return false;
    }
    if (
      this.password != this.confirmPassword &&
      this.confirmPassword.length > 0
    ) {
      this.hint = "两次输入的密码不一致！";
      this.allow = false;
      return false;
    }
    if (this.nickname.length > 10) {
      this.hint = "昵称不能超过10个字符！";
      this.allow = false;
      return false;
    }
    if (!this.tempFlag) {
      this.hint = "";
      this.allow = true;
    }
    this.tempFlag = false;

  },
};
</script>
<style lang="less" scoped>
.box-registerBox {
  width: 100%;
  height: 100%;

  // background-color: red;
  form {
    position: relative;
    width: 15rem;
    height: 25rem;
    box-sizing: border-box;
    padding-top: 1rem;
    border-radius: 0.5rem;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4),
      -2px -2px 5px rgba(255, 255, 255, 0.8);

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

    .wrongpassword {
      display: block;
      text-align: center;
      position: relative;
      font-size: 0.6rem;
      color: rgb(255, 0, 0);
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

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
  }
}

.back {
  cursor: pointer;
  background-color: rgba(0, 238, 255, .2);
  position: absolute;
  display: inline-block;
  left: 0;
  top: 0;
  padding-left: .2rem;
  width: 1.5rem;
  height: 1.3rem;
  border-radius: .5rem 0 .5rem 0;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, .6);
  transition: .3s all;

  &:hover {
    background-color: rgba(0, 238, 255, 0.6);
    color: rgba(255, 255, 255, 1);
  }
}

.background {
  transform: rotateY(180deg);
}
</style>