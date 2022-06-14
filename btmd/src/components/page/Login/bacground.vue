<template>
      <div class="background">
        <div class="c1"></div>
        <div class="c2"></div>
        <div class="c3"></div>
        <div class="c4"></div>
        <div class="c5"></div>
      </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
// 背景
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    rgb(0, 232, 248) 20%,
    rgb(161, 11, 238) 100%
  );
  border-radius: 0.5rem;
  opacity: 0.8;
  overflow: hidden;
  > div {
    position: absolute;
    border-radius: 50%;
  }
  .c1 {
    width: 10rem;
    height: 10rem;
    background: linear-gradient(
      to bottom,
      rgba(0, 252, 134, 0.6) 20%,
      rgba(255, 0, 0, 0.6) 100%
    );
    bottom: -2rem;
    right: -5rem;
  }
  .c2 {
    width: 6rem;
    height: 6rem;
    background: linear-gradient(
      to bottom,
      rgba(0, 88, 252, 0.6) 20%,
      rgba(123, 255, 0, 0.6) 100%
    );
    top: -1rem;
    right: -2rem;
  }
  .c3 {
    width: 20rem;
    height: 20rem;
    background: linear-gradient(
      to bottom,
      rgba(76, 0, 255, 0.8) 20%,
      rgba(219, 243, 0, 0.6) 100%
    );
    top: -10rem;
    left: -10rem;
  }
  .c4 {
    width: 8rem;
    height: 8rem;
    background: linear-gradient(
      to bottom right,
      rgba(0, 225, 255, 0.6) 20%,
      rgba(255, 255, 0, 0.6) 100%
    );
    bottom: 3rem;
    left: -3rem;
  }
  .c5 {
    width: 13rem;
    height: 13rem;
    background: linear-gradient(
      to bottom left,
      rgba(251, 255, 0, 0.9) 20%,
      rgba(255, 7, 172, 0.6) 100%
    );
    bottom: 6rem;
    left: 5rem;
  }
}

</style>