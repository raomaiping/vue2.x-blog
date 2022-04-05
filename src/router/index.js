import Vue from 'vue'
import store from '@/store'
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
Vue.use(Router)
const whiteList = [
  '/login-register',
  '/home',
  '/archive',
  '/detail',
  '/404',
  '/about',
] //白名单
NProgress.configure({ showSpinner: false }) // 进度条配置

const createRouter = () =>
  new Router({
    // mode: 'history', // 需要服务端支持
    scrollBehavior: () => ({ y: 0 }),
    routes,
  })
const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重置路由
}
router.beforeEach(async (to, from, next) => {
  // 开始进度条
  NProgress.start()
  //设置页面标题
  document.title = getPageTitle(to.meta.title)
  // 获取用户登录状态
  const isLogin = store.getters.isLogin
  console.log(isLogin)
  if (isLogin) {
    if (to.path === '/login-register') {
      next('/admin/main')
      NProgress.done()
    } else {
      //  获取用户信息
      const userInfo = store.getters.userInfo
      if (userInfo) {
        next()
      } else {
        try {
          // 获取用户信息
          await store.dispatch('user/getUserInfo')
          next()
        } catch (error) {
          // 修改登录状态
          await store.dispatch('user/resetLoginState')
          Message.error(error || 'Has Error')
          next(`/login-register?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免费登录白名单中，直接进入
      next()
    } else {
      // 没有访问权限的其他页面被重定向到登录页面。
      next(`/login-register?redirect=${to.path}`)
      NProgress.done()
    }
  }
  next()
})

router.afterEach((to) => {
  // 完成进度条
  NProgress.done()
})

export default router
