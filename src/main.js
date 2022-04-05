import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Prism from 'prismjs'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'
import '@/styles/reset.scss' //重置css
import '@kangc/v-md-editor/lib/style/preview.css'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

import '@/icons' // icon
import '@/components'
const config = require('./config')
VMdPreview.use(vuepressTheme, {
  Prism,
})
VMdPreview.use(createCopyCodePlugin())
Vue.use(VMdPreview)
// 引入element ui
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$config = config
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
