import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Customer from '@/components/Customer'
import ParentAndChildComp from '@/components/ParentAndChildComp'

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
      name: 'ParentAndChildComp',
      component: ParentAndChildComp
    }
  ]
})
