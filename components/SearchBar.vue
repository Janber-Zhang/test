<template>
  <div class="search-bar-warp">
    <div class="search-bar-body">
      <span class="title">博普云</span>
      <div class="search_key_body">
        <input class="search_key_input" type="text">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .search-bar-warp{
    background-color: #ffffff;
    overflow: hidden;
    padding-top: 40px;
  }
  .search-bar-body{
    width: 1190px;
    margin: 0 auto;
    overflow: hidden;
    height: 50px;
  }
  .title{
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    font-weight: 300;
    font-size: 40px;
    line-height: 50px;
    color: #00367a;
    letter-spacing: 1px;
    float: left;
  }
  .search_key_body{
    width: 390px;
    margin: 0 auto;
  }
  .search_key_input{
    width: 400px;
    height: 50px;
    outline: 0;
    border: 1px solid #dedede;
    border-radius: 25px;
    text-indent: 10px;
    font-size: 20px;
    color: #999999;
  }
</style>
