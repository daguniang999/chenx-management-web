<template>
  <v-app id="inspire">
    <asideBar></asideBar>
    <headBar v-if="styleArray[0] == 1" :title="title"></headBar>
    <v-main>
      <div v-if="styleArray[1] == 1" class="container">
        <router-view></router-view>
      </div>
      <div v-else class="containerAll">
        <router-view></router-view>
      </div>
      <foot-bar v-if="styleArray[2] == 1" style="width: 100%; position: absolute; bottom: 0;"></foot-bar>
    </v-main>
  </v-app>
</template>

<script>
  import asideBar from './AsideBar.vue';
  import headBar from './HeadBar.vue';
  import footBar from './FootBar.vue';
  export default {
    components: {
      asideBar,
      headBar,
      footBar,
      styleArray: [],
    },
    data() {
      return {
        title: 'TODO',
      }
    },
    methods: {

    },
    activated() {

    },
    mounted() {
    },
    watch: {
      '$route': {
        immediate: true,
        handler(to, from) {
          this.title = to.meta.title;
          this.styleArray = this.$stringUtils.toHexArray(to.meta.mode, 2, 1, 3);
        }
      }
    },

  }
</script>

<style>
  .container {
    padding: 10px 10px 110px 10px;
    min-height: 100%;
  }

  .containerAll {
    padding: 10px 10px 10px 10px;
    min-height: 100%;
  }

</style>