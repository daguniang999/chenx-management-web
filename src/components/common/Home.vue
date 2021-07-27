<template>
  <v-app id="inspire">
    <asideBar></asideBar>
    <headBar></headBar>
    <v-main>
      <div style="width: 100%; height: 100%;">
        <router-view></router-view>
        <foot-bar></foot-bar>
      </div>

    </v-main>
    <!-- <div style="width: 100%; height: 100%; padding: 60px 10px 10px 10px">
      
    </div> -->

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
      footBar
    },
    methods: {

    },
    activated() {

    },
    mounted() {
      
    }

  }
</script>

<style>

</style>