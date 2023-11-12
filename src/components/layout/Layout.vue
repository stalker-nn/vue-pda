<template>
  <v-app>
    <Sidenav :menuItems="menuItems"></Sidenav>

    <Navigation></Navigation>

    <v-main>
      <router-view></router-view>
    </v-main>

    <Preloader></Preloader>
  </v-app>
</template>

<script setup lang="ts">
import Navigation from "@/components/layout/Navigation.vue";
import Sidenav from "@/components/layout/Sidenav.vue";
import Preloader from "@/components/layout/Preloader.vue";
import {ref} from "vue";
import {IMenu} from "@/App.types";

const menuItems = ref<IMenu[]>([
  { id: 1, title: 'Home', path: '/', icon: 'mdi-home' },
  { id: 2, title: 'Domains', path: '/domains', icon: 'mdi-server' },
  { id: 3, title: 'Mailboxes', path: '/mailboxes', icon: 'mdi-email' },
  { id: 4, title: 'Aliases', path: '/aliases', icon: 'mdi-at' }
]); //TODO : get data from api
</script>

<style scoped>

</style>