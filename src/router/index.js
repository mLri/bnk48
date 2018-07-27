import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Members from '@/components/Members'
import Products from '@/components/Products'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
