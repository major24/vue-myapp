import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Customer from '@/components/misc/Customer'
import BlogPage from '@/components/parent-child/BlogPage'
import ProductPage from '@/components/product/ProductPage'
import ButtonCounterPage from '@/components/button-counter/ButtonCounterPage'
import GuestPage from '@/components/guest-registration/GuestPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/parent-child',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/product',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/button-counter',
      name: 'ButtonCounterPage',
      component: ButtonCounterPage
    },
    {
      path: '/guest-registration',
      name: 'GuestPage',
      component: GuestPage
    }
  ]
})
