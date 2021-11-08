/*
 * @Date: 2020-12-07 09:26:06
 * @LastEditors: 饶迈平
 * @LastEditTime: 2020-12-14 17:05:11
 * @FilePath: \mindray\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import getPageTitle from '@/utils/getPageTitle'

// 解决重复点击路由报错的BUG
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
NProgress.configure({ showSpinner: false }) // 进度条配置
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  // 开始进度条
  NProgress.start()
  //设置页面标题
  document.title = getPageTitle(to.meta.title)
  next()
})

router.afterEach((to) => {
  // 完成进度条
  NProgress.done()
})

export default router
