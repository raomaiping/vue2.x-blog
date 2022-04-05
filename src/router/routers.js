import BlogLayout from '@/layout/blog'
import ServerLayout from '@/layout/server'

/**
 *
 * hidden: true                   如果设置为true, item将不会显示在侧边栏中(默认为false)  
 * alwaysShow: true               如果设置为true，将始终显示根菜单
 *                                如果没有设置alwaysShow，当item有多个子路由时，  
 *                                它将成为嵌套模式，否则不显示根菜单  
 * redirect: noRedirect           如果设置noRedirect将不会在面包屑中重定向  
 * name:'router-name'             该名称由<keep-alive>使用(必须设置!!)  
 * meta : {
    roles: ['admin','editor']    控制页面角色(您可以设置多个角色)  
    title: 'title'               名称显示在侧边栏和面包屑(建议设置)  
    icon: 'svg-name'/'el-icon-x' 图标显示在侧边栏中
    breadcrumb: false           如果设置为false，该项目将隐藏在breadcrumb中(默认为true)  
    activeMenu: '/example/list' 如果设置了path，侧边栏将突出显示您设置的路径  
  }
 */

export default [
  {
    path: '/',
    component: BlogLayout,
    redirect: '/home',
    hidden: true,
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: {
          title: '首页',
        },
        component: () => import('@/views/blog/home/index'),
      },
      {
        path: 'about',
        name: 'About',
        meta: { title: '关于' },
        component: () => import('@/views/blog/about/index'),
      },
      {
        path: 'archive',
        name: 'Archive',
        meta: { title: '归档' },
        component: () => import('@/views/blog/archive/index'),
      },
      {
        path: 'detail/:id',
        name: 'Detail',
        meta: { title: '详情' },
        component: () => import('@/views/blog/detail/index'),
      },
    ],
  },
  {
    path: '/admin',
    component: ServerLayout,
    redirect: '/main',
    children: [
      {
        path: 'main',
        name: 'Main',
        meta: { title: '首页', icon: 'home' },
        component: () => import('@/views/server/main/index'),
      },
    ],
  },
  {
    path: '/login-register',
    name: 'LoginRegister',
    meta: { title: '登录&注册' },
    hidden: true,
    component: () => import('@/views/server/login-register/index'),
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    meta: { title: '404' },
    hidden: true,
  },
  { path: '*', redirect: '/404', hidden: true },
]
