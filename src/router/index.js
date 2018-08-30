import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cart from '@/components/Cart'
import Login from '@/components/Login'
import Admin from '@/components/admin/Admin'
import ViewProduct from '@/components/view/ViewProduct'
import AdminEditProduct from '@/components/admin/AdminEditProduct'
import Transition from '@/components/Transition'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/product/:productId',
      name: 'viewProduct',
      component: ViewProduct
    },
    {
      path: '/admin/product/edit/:productId',
      name: 'editProduct',
      component: AdminEditProduct
    },
    {
      path: '/transition',
      name: 'transition',
      component: Transition
    }
  ]
})
