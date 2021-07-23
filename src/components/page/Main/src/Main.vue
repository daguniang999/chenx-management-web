<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer" app>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-main>
      Main
      <div style="height: 1000px"></div>

      <v-footer dark padless>
        <v-card class="flex"
          flat tile>
          <v-card-title class="teal">
            <strong class="subheading">Get connected with us on social networks!</strong>
            <v-spacer></v-spacer>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4"
              dark icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>