<template>
  <v-navigation-drawer app left v-model="navigation" permanent :rail="rail" @click="rail = false">
    <v-list-item title="Alex Zimin" nav prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg">
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item v-for="item in menuItems" :prepend-icon="item.icon" link :key="item.id">
        <v-list-item-title>
          <router-link :to="item.path">{{ item.title }}</router-link>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import {ref, toRefs} from "vue";

const navigation = ref(true);
const rail = ref(true);

const props = defineProps(['menuItems']);
const {menuItems} = toRefs(props);
</script>

<style scoped>

</style>