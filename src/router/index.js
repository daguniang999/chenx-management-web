import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/page/Login/src/Login.vue'
import Test from '../components/page/Test/src/Test.vue'
import Main from '../components/page/Main/src/Main.vue'
import Home from '../components/common/Home.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/main',
      children: [
        {
          path: 'main',
          component: Main,
          name: 'main'
        }
      ]
    },
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    // {
    //   path: '/main',
    //   name: 'Main',
    //   component: Main
    // },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home
    // },
  ]
})
