<template>
  <div>
    <Background></Background>
    <router-view></router-view>
    <Cart v-if="isLogin"></Cart>
  </div>
</template>

<script>
import bus from "./js/EventBus.js";
import Background from "./components/background/Background1.vue";
import Cart from "./components/cartwindow/cartBody.vue";
import axios from "axios"


export default {
  components: {
    Background, Cart
  },
  data() {
    return {
      currentPage: 0,
      userInfo: null,
      isLogin: false
    };
  },
  created() {
    bus.$on("token", (userInfo) => {
      this.userInfo = userInfo;
    });

    let tonken = window.localStorage.getItem("token");
    axios.get("http://124.93.196.45:10001/prod-api/api/common/user/getInfo", {
      headers: {
        Authorization: tonken
      }
    }).then(res => {
      if (res.data.code == 200) {
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    })
  },
  updated(){
    let tonken = window.localStorage.getItem("token");
    axios.get("http://124.93.196.45:10001/prod-api/api/common/user/getInfo", {
      headers: {
        Authorization: tonken
      }
    }).then(res => {
      if (res.data.code == 200) {
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    })
  }

};
</script>
<style lang="less">
.page {
  transition: all 0.3s;
}

::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}

@media (max-width: 1440px) {
  * {
    font-size: 14px;
  }
}

@media (min-width: 1660px) {
  * {
    font-size: 20px;
  }
}

* {
  margin: 0;
  padding: 0;

}

li {
  list-style: none;
}

a {

  &:link,
  &:visited {
    text-decoration: none;
    color: black;
  }
}

body {
  // background: url(./assets/image/body_background.png) no-repeat;
  // background-color: rgb(234, 232, 235);

  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}

.header {
  position: relative;
  top: 0;
  z-index: 1;
}
</style>