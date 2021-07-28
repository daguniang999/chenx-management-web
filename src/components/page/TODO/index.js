import TODO from './src/TODO.vue';

TODO.install = (Vue) => {
    Vue.component(TODO.name, Main)
  }
export default TODO