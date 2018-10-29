import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import HotelsMain from './views/HotelsMain'
import Login from './views/Login'
import TablesView from './views/TablesView'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'main',
      component: HotelsMain
    },
    {
      path: '/table/:tableName/page/:page',
      name: 'table',
      component: TablesView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
