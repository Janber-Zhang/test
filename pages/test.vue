<template>
  <section class="container">
    <top-bar></top-bar>
    <search-bar></search-bar>
    <div style="padding-top: 20px; overflow: hidden;">
      <div style="width: 1190px; margin: 0 auto; overflow: hidden;">
        <ul style="width: 200px; border: 1px solid #dedede; padding: 5px 0; display:inline-block; float: left; background-color: #f5f5f5">
          <li style="padding: 10px 10px">化工 塑料 涂料 表面</li>
          <li style="padding: 10px 10px">安防 消防</li>
          <li style="padding: 10px 10px">电子 LED 智能硬件</li>
          <li style="padding: 10px 10px">酒店 家居 礼品</li>
          <li style="padding: 10px 10px">五金 建材 家装 钢铁</li>
          <li style="padding: 10px 10px">服装 纺织</li>
          <li style="padding: 10px 10px">印刷 包装 丝印</li>
          <li style="padding: 10px 10px">饮水 配件 净水器</li>
          <li style="padding: 10px 10px">空调 采暖 热泵 空净</li>
          <li style="padding: 10px 10px">汽车 配件 用品 维修</li>
          <li style="padding: 10px 10px">食品 制药</li>
          <li style="padding: 10px 10px">家电</li>
        </ul>
        <div style="width: 700px; display: inline-block; margin-left: 10px; float: left;">
          <el-carousel height="305px" v-if="load">
            <el-carousel-item v-for="item in imgs" :key="item">
              <img v-bind:src="item" alt="img" style="width: 100%; height: 100%;">
            </el-carousel-item>
          </el-carousel>
          <el-carousel height="200px" style="margin-top: 10px;" v-if="load">
            <el-carousel-item v-for="item in 4" :key="item">
              <h1>{{item}}</h1>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div style="width: 270px; float:right">
          <el-card :body-style="{ padding: '0px', height: '305px' }">
            <img style="height: 100%; width: 100%;" src="https://img01.hc360.com/news/201801/201801031050376387.jpg" class="image">
          </el-card>
          <el-card :body-style="{ padding: '0px', height: '200px' }" style="margin-top: 10px;">
            <div style="padding: 0;">
              <img src="https://img03.hc360.com/news/201803/201803021708583649.jpg" style="height: 100%; width: 100%;" alt="">
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TopBar  from '~/components/Header.vue'
import SearchBar from '~/components/SearchBar.vue'

export default {
  components: {
    TopBar,
    SearchBar
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'keywords', name: 'keywords', content: '111' }
      ]
    }
  },
  data() {
    return {
      load: false,
      title: 'ppc-tech',
      imgs: [
        'https://img.alicdn.com/simba/img/TB1s1EWhntYBeNjy1XdSutXyVXa.jpg',
        'https://img04.hc360.com/news/201803/201803301148165356.png',
        'https://img03.hc360.com/chat/201803/201803201528241154.png',
        'https://img01.hc360.com/news/201803/201803201141129797.png'
        ]
    }
  },
  mounted() {
    this.load = true;
  },
  methods: {
    showAlert() {
      alert('show Message')
    }
  }
}
</script>

<style scoped>

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

ul li{
  list-style: none;
}

ul li:hover{
  background-color: #dedede;
}

.links {
  padding-top: 15px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
</style>
