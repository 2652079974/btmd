<template>
  <div class='index-content'>
    <Header class="header" :userInfo="userInfo"></Header>
    <Container class="container"></Container>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Container from '../../components/container/Container.vue'
import Cart from '../cartwindow/cartBody.vue'

export default {
  props: {
    userInfo: {
      type: Object,
      default: null
    }
  },
  components: {
    Container,Cart
  }
}
</script>

<style lang="less" scoped >
.container {
  background-color: rgba(250, 250, 250, .3);
  border-radius: 1rem;
  margin-top: 2rem;
  box-shadow: 4px 4px 9px rgba(0, 0, 0, .1);
}
</style>