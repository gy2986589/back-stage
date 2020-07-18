import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import index from '@/pages/Index'
import pageOne from '@/pages/pageOne'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path: '/pageOne',
          name: 'pageOne',
          component:pageOne
        }
      ]
    }

  ]
})
