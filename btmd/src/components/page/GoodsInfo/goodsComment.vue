<template>
  <div class="goods-comment-content">
      <!-- 此处渲染评论列表 -->
      <CommentItem>

      </CommentItem>
      <!-- 这里是评论区 -->
      <div>
        <form action="" class="comment-area">
          <textarea class="comment-text" name="" id=""  rows="5"></textarea>
          <button class="comment-button">评价该商品</button>
        </form>
      </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.goods-comment-content {
  position: relative;
    width: 100%;
    // background-color: cyan;
}

.comment-area{
  position: relative;
  top: 1rem;
  display: block;
  width: 100%;
  height: 40rem;
  // background-color: red;

  .comment-text{
    position: relative;
    width: 100%;
    font-size: .8rem;
    outline: none;
  }
  button{
    cursor: pointer;
    position: relative;
    top: .5rem;
    left: .5rem;
    border: none;
    font-size: .8rem;
    width: 8rem;
    height: 2rem;
    background-color:rgba(255, 123, 0, .5) ;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);
    transition: .1s all;
    &:hover{
      background-color: rgba(255, 123, 0, 0.8);
    }
    &:active{
      font-size: .75rem;
      box-shadow: 0 0 0 rgba(0, 0, 0, .1),
        0 0 0 rgba(255, 255, 255, .8),
        inset -2px -2px 3px rgba(0, 0, 0, .2),
        inset 2px 2px 3px rgba(255, 255, 255, .5);
    }
  }
}

</style>