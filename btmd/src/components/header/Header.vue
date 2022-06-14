<template>
  <div class="header" style='transform-style: preserve-3d'>
      <Logo class="logo" link="#" title="冰天美帝-啊对对队制作"></Logo>
      <Nav class="header-nav"></Nav>  
      <SearchBox class="searchbox" action="https:www.baidu.com/s" name="wd" ></SearchBox>
        <User class="user" :userInfo="userInfo"></User>
  </div>
</template>

<script>
import Logo from './logo.vue'
import Nav from './nav.vue'
import SearchBox from './searchbox.vue'
import User from './user/userWindow.vue'

export default {
    props:{
        userInfo:{
            type:Object,
            default:null
        }
    },
  components: { 
      Logo,Nav,SearchBox,User
  }


}
</script>

<style lang="less" scoped>
    .header{
        height: 4rem;
        background-color: rgba(255,255,255,0.5);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);
    }
    .logo{
        float: left;
        margin-left: 1rem;
    }
    .header-nav{
        float: left;
        // position: absolute;
        margin-left: 1rem;
    }
    .searchbox{
        position: relative;
        margin-left: 2rem;
        top: 50%;
        right: 2rem;
        float: left;
        transform: translate(0,-50%);
    }
        

</style>