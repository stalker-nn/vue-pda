<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router'
import {ref} from "vue";
import {useTheme} from "vuetify";

export interface IMenu {
  id: number,
  title: string,
  path: string
}

const navigation = ref(false);
const menuItems = ref<IMenu[]>([
  {
    id: 1,
    title: 'Главная',
    path: '/'
  },
  {
    id: 2,
    title: 'Домены',
    path: '/domains'
  },
  {
    id: 3,
    title: 'Почтовые ящики',
    path: '/mailboxes'
  },
  {
    id: 4,
    title: 'Алиасы',
    path: '/aliases'
  }
])

const theme = useTheme();
function  toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<template>
  <v-app>

    <v-navigation-drawer app left absolute temporary v-model="navigation">
      <v-list-item v-for="item in menuItems">
        <v-list-item-title>
          <router-link :to="item.path">{{ item.title }}</router-link>
        </v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar app color="">
      <v-app-bar-nav-icon @click="navigation = !navigation"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <h3>PDA Dashboard</h3>
      </v-app-bar-title>
      <v-btn @click="toggleTheme">Toggle theme</v-btn>
    </v-app-bar>


    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
