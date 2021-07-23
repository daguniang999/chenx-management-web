<template>
  <v-app>
    <v-btn color="accent" style="margin: 2px 20px; padding: 0px 20px;" @click="save">sava</v-btn>
  </v-app>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {

    }
  },
  methods: {
    save() {
      this.$localStorage.set("name", "tetsts");
    }
  }
}
</script>

<style>

</style>