import 'babel-polyfill'
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import fastclick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'

import 'common/stylus/index.styl'

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
