<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-sheet 
      style="text-align: center;"
      color="grey lighten-4"
      class="pa-4">
        <!-- 头像 -->
      <v-avatar
        class="mb-4"
        color="grey darken-1"
        size="64"></v-avatar>
        <!-- 用户名 -->
      <div>john@vuetifyjs.com</div>
    </v-sheet>
      <!-- 分割线 -->
      <v-divider></v-divider>
      <!-- 跳转列表 -->
      <v-list>
        <v-list-item
          v-for="[icon, text, path] in links"
          :key="icon"
          :to="path"
          link>
          <!-- 图标 -->
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <!-- titile -->
          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'TODO', {path: "/home/todo"}],
        ['', 'Test', {path: "/home/test"}],
      ],
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