import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/mainPage/MainPage.vue'
import SubPage from '@/components/SubPage/SubPage.vue'
import SubPageIndex from '@/components/SubPage/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/home',
      name: 'home',
      component: MainPage,
      children: [

      ]
    },
    {
      path: '/subpage',
      name: 'subPageIndex',
      props: true,
      component: SubPageIndex,
      children: [
        {
          path: ':id',
          name: 'subPage',
          props: true,
          component: SubPage
        }

      ]
    },
    {
      path: '*',
      redirect: {name: 'home'}
    }
  ]
})
