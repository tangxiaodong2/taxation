<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide class="swiper-item" v-for="item of swiperList" :key="item.id">
      <img :id="item.id" class="swiper-img" :src="item.imgUrl" alt="去哪儿门票" />
      <h4 class="title">{{item.title}}</h4>
    </swiper-slide>
    <div class="swiper-pagination main-page-bar" slot="pagination"></div>
    <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import {MAIN_PAGE_ITEMS} from '../../assets/constants.js'
export default {
  name: 'carrousel',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        // scrollbar: {
        //   el: ".swiper-scrollbar"
        // },
        // 自动轮播
        autoplay: {
          delay: 3000,
          // 当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        loop: false,
        speed: 1000,
        on: {
          click: event => {
            this.clickHandler(event)
          }
        }
        // Some Swiper option/callback...
      },
      swiperList: MAIN_PAGE_ITEMS
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    clickHandler (event) {
      console.log('swiper click event id ', event, event.target.id)
      this.$router.push(`/subpage/${event.target.id}`)
    }
  }
}
</script>
<style scoped>
img{
  display: block;
  width: 100%;
}
.swiper-item {
  position: relative;
}
.swiper-item > .title {
  position: absolute;
  top: 50%;
  right: 10%;
  color: #fff;
  font-size: 80px;
}
.main-page-bar {
  bottom: 0;
  top: unset;
  position: fixed;
}
.main-page-bar.swiper-pagination-progressbar /deep/ .swiper-pagination-progressbar-fill {
  background-color: #fff;
}
</style>
