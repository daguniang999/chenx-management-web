<template>
  <v-navigation-drawer v-model="drawer" app>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
  mounted() {
    this.drawer = this.$store.state.drawer;
  },
  computed: {
    drawerStore() {
      return this.$store.state.drawer;
    }
  },
  watch: {
    drawerStore() {
      this.drawer = this.$store.state.drawer;
    },
    drawer() {
      this.$store.commit("changeDrawer", this.drawer);
    }
  }
}
</script>

<style>

</style>