<template>
  <div class="box-sideBanner" ref="div" title="广告">
    <h1>广告</h1><a href="javascript:;" class="more" title="更多">更多 +</a>
    <ul ref="ul">
      <li v-for="i in banner" :key="i.id">
        <a :href="i.href" :title="i.name"><img :src="i.img" alt=""></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sidebanner: {
      default: []
    }
  },
  data() {
    return {
      banner: this.sidebanner
    }
  },
  created(){
    setTimeout(() => {
    }, 0);
  },
  mounted() {
      this.$refs.ul.style.height = 25 + 'rem'
      this.$refs.ul.style.overflow = 'scroll'
  },
}
</script>
<style lang="less" scoped>
.box-sideBanner {
  width: 90%;
  // max-height: 25rem;
  white-space: nowrap;
  margin: 0 auto;
  border-radius: .2rem;
  padding-bottom: 1rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, .2),
    -2px -2px 4px rgba(255, 255, 255, .6);

  ul {
    width: 100%;
    padding-top: 1rem;

    li {
      width: 100%;

      a {
        display: inline-block;
        width: 100%;


        img {
          width: 80%;
          margin: .5rem 10%;
          margin-top: 0;
          border-radius: 0.2rem;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, .2);
          transition: .3s all;
          
        }
        &:hover{
          img{
            transform: scale(1.1);
          }
        }
      }
    }
  }

  h1 {
    box-sizing: border-box;
    display: block;
    padding: .2rem .5rem;
    border-bottom: 1px solid #ccc;
    font-family: '华文仿宋';
    font-size: 1rem;
    color: white;
    text-shadow: 2px 2px 2px rgba(0,0,0,.3);
  }
}
.more{
  cursor: pointer;
  position:absolute;
  right: .5rem; 
  top: .3rem; 
  font-size: .7rem; 
  color: white;
  transition: .3s all;
  &:hover{
    color:rgb(255, 174, 0)
  }
}
</style>