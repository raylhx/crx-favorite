import Vue from 'vue'
import App from './App'

global.browser = require('webextension-polyfill')
Vue.prototype.$browser = global.browser

console.log('hhhhh')
/* eslint-disable no-new */
new Vue({
  el: '#app',

  render: h => h(App)
})
