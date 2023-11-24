<template>
  <div class="view-wrapper">
    <h1>Virtual domains</h1>
    <v-btn prepend-icon="mdi-plus">ADD</v-btn>
    <v-table>
      <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-left">Domain</th>
        <th class="text-left">UID</th>
        <th class="text-left">GID</th>
        <th class="text-left">Description</th>
        <th class="text-left">Enable</th>
        <th class="text-left">Created At</th>
        <th class="text-left">Updated At</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="domain in domains" :key="domain.id">
        <td>{{ domain.id }}</td>
        <td>{{ domain.domain }}</td>
        <td>{{ domain.virtual_uid }}</td>
        <td>{{ domain.virtual_gid }}</td>
        <td>{{ domain.description }}</td>
        <td>{{ domain.enable }}</td>
        <td>{{ domain.created_at }}</td>
        <td>{{ domain.updated_at }}</td>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import {onMounted, ref} from "vue";
import {IDomain} from "@/models/Domain.types";

const domains = ref<IDomain>([])

onMounted(() => {
  axios.get('http://pda-api/api/domains')
      .then(res => {
        domains.value = res.data
      })
      .catch(error => {
        console.log(error)
      })
})
</script>

<style scoped>
.view-wrapper {
  padding: 2rem;
}
</style>