<template>
  <div class="box-login">
    <div class="loginbox-pakage" ref="pakagebox">
      <LoginBox class="loginbox" v-show="this.curpage==0" @toggleBox='toggleBox()' ref="login" />
      <RegisterBox class="registerbox" v-show="this.curpage==1" @back="toggleBox()" />
    </div>
  </div>
</template>

<script>
import LoginBox from "./loginBox.vue";
import RegisterBox from "./rigsiterBox.vue";
export default {
  components: {
    LoginBox,RegisterBox
  },
  methods: {
    toggleBox(e){
      let box = this.$refs.pakagebox
      box.style.transform = this.curpage==0?"rotateY(-180deg)":"rotateY(0deg)"
      setTimeout(() => {
        this.curpage = this.curpage==0?1:0
      }, 300);
    }
  },
  data(){
    return{
      curpage:0,
    }
  }
};
</script>
<style lang="less" scoped>
@keyframes fadeIn {
  0% {
    transform: rotateY(90deg) ;
  }
  100% {
    transform: rotateY(0deg);
  }
}
.box-login {
  height: 100%;
  width: 100%;
  display: flex;
    justify-content: center;
  .loginbox-pakage {
    position: absolute;
    margin: 8rem auto;
    display: inline-block;
    transition: 1s all;
    animation: fadeIn .8s ease-in-out;
    // 因为子盒子脱标，所以这里必须设置宽高，且必须和子盒子一致
    width: 15rem;
    height: 25rem;
    .loginbox {
      position: absolute;
      z-index: 1;
    }
    .registerbox {
      transform: rotateY(180deg);
      position: absolute;
    }
  }
}

</style>