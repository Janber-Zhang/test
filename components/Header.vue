<template>
  <div class="top-bar-warp">
    <div class="top-bar-body">
      <ul class="top-nav-left" v-if="load">
        <li><span class="login-tips">您好，请登陆！</span></li>
      </ul>
      <ul class="top-nav-right">
        <li class="nav-item">收藏夹</li>
        <li class="nav-item">购物车</li>
        <li class="nav-item">买家中心</li>
        <li class="nav-item">卖家中心</li>
        <li class="nav-item">专业展厅</li>
        <li class="nav-item">联系客服</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      load: false
    }
  },
  mounted(){
    this.load = true;
  }
}
</script>

<style scoped>
  .top-bar-warp{
    height: 36px;
    background-color: #f5f5f5;
    overflow: hidden;
  }
  .top-bar-body{
    width: 1190px;
    margin: 0 auto;
    height: 35px;
    background-color: #f5f5f5;
  }
  .top-nav-left,
  .top-nav-right{
    list-style: none;
    overflow: hidden;
  }
  .top-nav-left{
    float: left;
  }
  .top-nav-right{
    float: right;
  }
  .login-tips{
    font-size: 14px;
    color: #1472f5;
    line-height: 35px;
  }
  .nav-item{
    float: inherit;
    font-size: 14px;
    color: #666666;
    line-height: 35px;
    padding: 0 10px;
    cursor: pointer;
  }
  .nav-item:hover{
    background-color: #ffffff;
  }
</style>
