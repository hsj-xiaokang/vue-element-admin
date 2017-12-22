import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
// 国际化
// import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog'// error log
import './permission' // permission control
import './mock' // simulation data generator
// http://www.jb51.net/article/118792.htm 【仅仅IE11可用】
import 'babel-polyfill'

import * as filters from './filters' // global filter

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})
// 国际化
// Vue.use(Element, { locale,
//   i18n: (key, value) => i18n.t(key, value)
// })
// 国际化使用方式
// this.$confirm('此操作将会把该记录放入回收站, 是否继续?', '提示', {
//   type: 'warning'
// }).then(() => {
// }).catch(() => {
// })

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
