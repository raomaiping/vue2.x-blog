import Vue from 'vue'
import "@/style/reset.css" //重置css
import App from './App.vue'
import router from './router'
import store from './store'
import '@/icons' // icon
import {
  Button,
  Select,
  Row,
  Col,
  Avatar,
  Tooltip,
  Card,
  Image,
  Divider,
  Drawer
} from 'element-ui';
import './components/index.js'
import '@/style/element-variables.scss'  //全局css
import 'element-ui/lib/theme-chalk/display.css';
const config = require('./config')
const components = [
  Button,
  Select,
  Row,
  Col,
  Avatar,
  Tooltip,
  Card,
  Image,
  Divider,
  Drawer
];
components.forEach(component => {
  Vue.use(component)
})



Vue.config.productionTip = false;
Vue.prototype.$config = config;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
