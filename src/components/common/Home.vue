<template>
  <v-app id="inspire">
    <asideBar></asideBar>
    <headBar></headBar>
    <div>
      <router-view></router-view>  
    </div>
  </v-app>
</template>

<script>
  import asideBar from './AsideBar.vue';
  import headBar from './HeadBar.vue';
  export default {
    components: {
      asideBar,
      headBar
    }
  }
</script>

<style>

</style>