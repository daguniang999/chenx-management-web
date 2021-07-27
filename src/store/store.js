import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    // 共享的数据 this.$store.state.xxx
    // 侧栏是否打开
    drawer: false,

  },
  mutations: {
    // 自定义方法修改变更store中的数据
    changeDrawer(state, msg) {
      state.drawer = msg;
      console.log(state.drawer);
    }
  },
  actions: {
    // 在mutations中不能编写异步的代码, 在此中可以填写异步代码
  },
  getters: {
    // Getter用于对Store中的数据进行加工处理形成新的数据, 会包装Store中保存的数据
  }
});


export default store;