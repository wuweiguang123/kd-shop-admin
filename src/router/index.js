import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/Index'

import Users from '@/components/users/Users'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/index',
    children: [
      { path: '/index', component: Index },
      { path: '/users', component: Users }
    ]
  }
]

const router = new VueRouter({
  routes
})

/**
 * 路由导航守卫
 * to 将要访问的路径
 * from 从哪个路径跳转而来
 * next 是一个函数，表示放行。next()有参数的时候表示强制跳转
 */
router.beforeEach((to, from, next) => {
  // 如果用户访问的是登录页，直接放行
  if (to.path === '/login') return next()
  // 从sessionStorage中获取到保存的token值
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果没有token，强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router
