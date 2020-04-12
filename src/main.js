// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/MainStyle.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// import 'swiper/css/swiper.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// Vue.use(VueAwesomeSwiper, /* { default global options } */)
