<template>
  <v-app-bar app color="">
    <v-app-bar-title>
      <h3>PDA Dashboard</h3>
    </v-app-bar-title>
    <v-btn @click="router.push('404')">404 Example</v-btn>
    <v-btn @click="router.push('login')">Auth Example</v-btn>
    <v-btn @click="toggleTheme">Toggle theme</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import {useTheme} from "vuetify";
import router from "@/router";

const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<style scoped>

</style>