<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <!-- <router-link :to="{name: 'todo'}">TODO</router-link> -->
      {{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      drawer: true,
    }
  },
  methods: {
    changeDrawer() {
      this.$store.commit('changeDrawer', !this.$store.state.drawer);
    }
  }
}
</script>

<style>

</style>