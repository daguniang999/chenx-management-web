<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="800">
      <v-app-bar
        flat
        color="rgba(0, 0, 0, 0)">
        <v-toolbar-title class="text-h7 black--text pl-1">
          我的任务
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-menu
          transition="slide-y-transition"
          bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="black"
              icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i">
              <span>{{ item.title }}</span>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <div style="margin: 10px 0px 0px 20px">
        <v-btn icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        new Task
      </div>
  </v-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            title: 'gcccccccccccfd'
          },
          {
            title: 'gcccccccccccfd'
          },
          {
            title: 'gcccccccccccfd'
          },
          {
            title: 'gcccccccccccfd'
          },
          {
            title: 'gcccccccccccfd'
          },
      
      
        ]
      }
    },
    activated() {
    },
    mounted() {
    },
    watch: {
    },
  }
</script>