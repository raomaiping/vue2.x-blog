import Layout from '@/layout'

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    children: [
      {
        path: 'Home',
        name: 'Home',
        meta: { title: '首页' },
        component: () => import('@/views/Home/index'),
      },
      {
        path: 'About',
        name: 'About',
        meta: { title: '关于' },
        component: () => import('@/views/About/index'),
      },
      {
        path: 'Archive',
        name: 'Archive',
        meta: { title: '归档' },
        component: () => import('@/views/Archive/index'),
      },
      {
        path: 'Details',
        name: 'Details',
        meta: { title: '详情' },
        component: () => import('@/views/Details/index'),
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    meta: { title: '404' },
    hidden: true,
  },
  { path: '*', redirect: '/404', hidden: true },
]
