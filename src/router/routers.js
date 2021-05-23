import Layout from '@/layout'

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    children: [{
      path: 'Home',
      name: 'Home',
      meta: { title: '首页' },
      component: () => import('@/views/Home/index'),
    }]
  },
  {
    path: '/About',
    component: Layout,
    children: [{
      path: '',
      name: 'About',
      meta: { title: '关于' },
      component: () => import('@/views/About/index'),
    }]
  },
  {
    path: '/TimerShaft',
    component: Layout,
    children: [{
      path: '',
      name: 'TimerShaft',
      meta: { title: '时间轴' },
      component: () => import('@/views/TimerShaft/index'),
    }]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    meta: { title: '404' },
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]
