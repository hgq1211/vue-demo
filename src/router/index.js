import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Inner from '../components/inner'
import InnerChild1 from '../components/innerChild1'
import InnerChild2 from '../components/innerChild2'
import Table from '../components/table'
import Dynamic from '../components/dynamic'
import VueState from '../components/vueState'
import VueAxios from '../components/vueAxios'

Vue.use(Router)

/* eslint-disable no-new */

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/inner',
      children: [
        { path: 'inner1', component: InnerChild1 },
        { path: 'inner2', component: InnerChild2 }
      ],
      name: 'Inner',
      component: Inner
    },
    {
      path: '/table',
      name: 'data',
      component: Table
    },
    {
      path: '/dynamic/:id',
      name: 'dynamic',
      component: Dynamic
    },
    {
      path: '/vueState',
      name: 'vueState',
      component: VueState
    },
    {
      path: '/vueAxios',
      name: 'vueAxios',
      component: VueAxios
    }
  ]
})
