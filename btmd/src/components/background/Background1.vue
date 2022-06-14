<template>
      <div class="background">
        <div>
          <div class="c1 c"></div>
          <div class="c2 c"></div>
          <div class="c3 c"></div>
          <div class="c4 c"></div>
          <div class="c5 c"></div>
          <div class="c6 c"></div>
          <div class="c7 c"></div>
          <div class="c8 c"></div>
          <div class="c9 c"></div>
          <div class="c10 c"></div>
        </div>
      </div>
</template>

<script>
export default {
  created(){

  }
}
</script>
<style lang="less" scoped>

@keyframes float {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

// 背景
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    rgb(0, 232, 248) 20%,
    rgb(161, 11, 238) 100%
  );
  opacity: 0.8;
  overflow: hidden;
  >div{
    animation: float 1.5s ease-in-out;
    position: relative;
    height: 35rem;
  }
  div > div {
    position: absolute;
    border-radius: 50%;
  }
  .c1 {
    width: 19rem;
    height: 19rem;
    background: linear-gradient(
      to top right,
      rgba(0, 252, 134, 0.6) 20%,
      rgba(255, 0, 0, 0.6) 100%
    );
    top: -3rem;
    right: 45rem;
    filter: blur(.5rem);
    box-shadow: inset 5px 5px 20px rgba(255, 255, 255, .4),inset -5px -5px 20px rgba(0, 0, 0, .2);
  }
  .c2 {
    width: 12rem;
    height: 12rem;
    background: linear-gradient(
      to bottom,
      rgba(0, 88, 252, 0.6) 20%,
      rgba(123, 255, 0, 0.6) 100%
    );
    top: -5rem;
    right: -3rem;
    filter: blur(.5rem);

    box-shadow: inset 5px 5px 20px rgba(255, 255, 255, .4),inset -5px -5px 20px rgba(0, 0, 0, .2);
  }
  .c3 {
    width: 20rem;
    height: 20rem;
    background: linear-gradient(
      to bottom,
      rgba(76, 0, 255, 0.8) 20%,
      rgba(219, 243, 0, 0.6) 100%
    );
    top: -8rem;
    left: -8rem;
    filter: blur(.1rem);

    box-shadow: inset 5px 5px 20px rgba(255, 255, 255, .4),inset -5px -5px 20px rgba(0, 0, 0, .2);
  }
  .c4 {
    width: 16rem;
    height: 16rem;
    background: linear-gradient(
      to bottom right,
      rgba(0, 225, 255, 0.6) 20%,
      rgba(255, 255, 0, 0.6) 100%
    );
    bottom: -5rem;
    left: -7rem;
    filter: blur(.5rem);

    box-shadow: inset 5px 5px 20px rgba(255, 255, 255, .4),inset -5px -5px 20px rgba(0, 0, 0, .2);
  }
  .c5 {
    width: 13rem;
    height: 13rem;
    background: linear-gradient(
      to bottom left,
      rgba(251, 255, 0, 0.6) 20%,
      rgba(255, 7, 172, 0.6) 100%
    );
    bottom: 6rem;
    left: 5rem;
    filter: blur(.3rem);

    box-shadow: inset 5px 5px 20px rgba(255, 255, 255, .4),inset -5px -5px 20px rgba(0, 0, 0, .2);
  }
  .c6 {
    width: 17rem;
    height: 17rem;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 255, 0.3) 20%,
      rgba(255, 0, 0, 0.6) 100%
    );
    bottom: 17rem;
    right: 13rem;
    filter: blur(.3rem);
    box-shadow: inset 5px 5px 20px rgba(255, 255, 255, .4),inset -5px -5px 20px rgba(0, 0, 0, .2);
  }
  .c7 {
    width: 13rem;
    height: 13rem;
    background: linear-gradient(
      to bottom right,
      rgba(255, 0, 221, 0.3) 20%,
      rgba(0, 255, 0,.4) 100%
    );
   top: 7rem;
    left: 32rem;
    filter: blur(.2rem);
    box-shadow: inset 5px 5px 20px rgba(255, 255, 255, .4),inset -5px -5px 20px rgba(0, 0, 0, .2);
  }

  .c8 {
    width: 15rem;
    height: 15rem;
    background: linear-gradient(
      to bottom left,
      rgba(38, 0, 255,.6) 20%,
      rgba(217, 255, 0,.5) 100%
    );
    bottom: 7rem;
    right:32rem;
    filter: blur(.15rem);
    box-shadow: inset 5px 5px 20px rgba(255, 255, 255, .4),inset -5px -5px 20px rgba(0, 0, 0, .2);
  }

  .c9 {
    width: 26rem;
    height: 26rem;
    background: linear-gradient(
      to top left,
      rgba(174, 0, 255,0.4) 20%,
      rgba(0, 225, 255,0.6) 100%
    );
    bottom: -13rem;
    left: 28rem;
    filter: blur(.05rem);
    box-shadow: inset 50px 50px 100px rgba(255, 255, 255, .4),inset -5px -5px 20px rgba(0, 0, 0, .2);
  }

  .c10 {
    width: 12rem;
    height: 12rem;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 255,0.2) 20%,
      rgba(255, 0, 0,0.2) 100%
    );
    bottom: -8rem;
    right: -1rem;
    box-shadow: inset 5px 5px 20px rgba(255, 255, 255, .4),inset -5px -5px 20px rgba(0, 0, 0, .2);
    filter: blur(.5rem);
  }

}

.background>div>div{
  box-shadow: 3px 3px 8px rgba(0,0,0,0.1);
}

</style>