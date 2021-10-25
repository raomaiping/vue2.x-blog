import Vue from 'vue'
import '@/style/reset.scss' //重置css
import App from './App.vue'
import router from './router'
import store from './store'
import '@/icons' // icon
import '@/components'
const config = require('./config')

Vue.config.productionTip = false
Vue.prototype.$config = config
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
