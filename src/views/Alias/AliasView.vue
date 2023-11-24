<template>
  <div class="view-wrapper">
    <h1>Virtual Aliases</h1>
    <v-btn prepend-icon="mdi-plus">ADD</v-btn>
    <v-table>
      <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-left">Alias</th>
        <th class="text-left">Domain ID</th>
        <th class="text-left">Description</th>
        <th class="text-left">Enable</th>
        <th class="text-left">Created At</th>
        <th class="text-left">Updated At</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="alias in aliases" :key="alias.id">
        <td>{{ alias.id }}</td>
        <td>{{ alias.alias }}</td>
        <td>{{ alias.domain_id }}</td>
        <td>{{ alias.description }}</td>
        <td>{{ alias.enable }}</td>
        <td>{{ alias.created_at }}</td>
        <td>{{ alias.updated_at }}</td>
      </tr>
      </tbody>
    </v-table>
  </div>

</template>

<script setup lang="ts">
import axios from "axios";
import {onMounted, ref} from "vue";
import type {IAlias} from "@/models/Alias.types";
import {environment} from "@/environments/environment.dev";

const aliases = ref<IAlias[]>([])

onMounted(() => {
  axios.get(`${environment.apiUrl}/api/aliases`)
      .then(res => {
        aliases.value = res.data
      })
})

</script>

<style scoped>
.view-wrapper {
  padding: 2rem;
}
</style>