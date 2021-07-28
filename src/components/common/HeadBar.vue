<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
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