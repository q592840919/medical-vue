import Vue from 'vue'
import Router from 'vue-router'
import HeaderAsideLayout from '@/layouts/HeaderAsideLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HeaderAsideLayout
    }
  ]
})
