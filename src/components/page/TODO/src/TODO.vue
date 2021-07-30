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
          <v-list flat>
            <v-list-item
              v-for="(item, i) in items"
              :key="i">
              <span>{{ item.title }}</span>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <div class="newTaskClass">
        <v-btn icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        New Task
      </div>

      <div class="taskListClass">
        <v-list>
          <v-list-item v-for="(item, index) in taskList" :key="index" class="taskItemClass">
              <v-radio
              :key="index"
              :label="item.title"
              :value="item.title"
            ></v-radio>
          </v-list-item>
        </v-list>
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
        ],
        taskList: [
          {title: "吃早餐"},
          {title: "做运动"},
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

<style>
  .newTaskClass {
    padding-left: 10px;
    display: flex;
    align-items: center;

  }

  .newTaskClass:hover {
     color: #4285f4;
  }

  .taskListClass {
    margin-top: 1px;
  }

  .taskItemClass:hover {
     box-shadow:rgb(232 232 232) 0px 10px 5px
  }
</style>