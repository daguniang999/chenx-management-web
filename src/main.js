// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import localStorageData from './utils/localStorage.js';
import loginUtils from './utils/loginUtils.js';
import store from './store/store.js';
import windows from './utils/windows.js'; 


Vue.config.productionTip = false

// vue.use
// Vue.use(ElementUI);
Vue.use(Vuetify);

Vue.prototype.$axios = axios;
Vue.prototype.$localStorage = localStorageData;
Vue.prototype.$loginUtils = loginUtils;
Vue.prototype.$windows = windows;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify: new Vuetify(),
  components: { App },
  template: '<App/>'
})