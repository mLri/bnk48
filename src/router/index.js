import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Members from '@/components/Members'
import Member from '@/components/Member'
import Products from '@/components/Products'
import Contact from '@/components/Contact'

import Login from '@/components/admin/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/member/:id',
      name: 'Member',
      component: Member
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
