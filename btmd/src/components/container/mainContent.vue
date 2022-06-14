<template>
<div class="main-content">
  <Sidebar class="news-bar"></Sidebar>
        <h1 class="iconfont" title="买东西吗，靓仔？">&#xe899;购物区</h1>
  <Merchandise class="merchandise"></Merchandise>

  <!-- 清除浮动 -->
  <div style="clear: both;"></div>
</div>
</template>

<script>
import Merchandise from './merchandise.vue'
import Sidebar from './sidebar/Sidebar.vue'

export default {
    components:{
        Merchandise,Sidebar
    }
}
</script>

<style lang="less" scoped>
    .merchandise{
        float: left;
        width: 100%;
    }
    .news-bar{
        width:100%;
        float: right;
    }
    h1{
        float: left;
        display: block;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: white;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        height: 3rem;
        width: 100%;
        border-bottom: 1px solid rgba(0,0,0,0.3);
        // 禁止选中文字
        user-select: none;
        // background-color: red;
    }
</style>