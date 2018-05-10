import Vue from 'vue'
/* 引入整个element-ui方式*/
import Element from 'element-ui'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css' // 控制元素显示和隐藏

import '@/styles/index.scss' // global css

/* 按需引入element-ui方式*/
// import { Button } from "element-ui";
// Vue.prototype.$ELEMENT = { size: 'small' };
// Vue.use(Button);

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization`
import './icons' // icon
import './errorLog'// error log
import './permission' // permission control
import './mock' // simulation data

import * as filters from './filters' // global filters

Vue.use(Element, {
  size: 'small', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

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
