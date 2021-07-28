import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/page/Login/src/Login.vue'
import Test from '../components/page/Test/src/Test.vue'
import TODO from '../components/page/TODO/src/TODO.vue'
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
      redirect: '/home/todo',
      children: [
        {
          path: 'todo',
          component: TODO,
          name: 'todo',
          meta: {
            title: 'TODO',
            mode: 4,
          }
        },
        {
          path: 'test',
          component: Test,
          name: 'test',
          meta: {
            title: 'Test',
            mode: 7,
          }
        }
      ]
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
    },
  ]
})
