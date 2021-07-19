import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/page/Login/src/Login.vue'
import Test from '../components/page/Test/src/Test.vue'
import Main from '../components/page/Main/src/Main.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },{
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
