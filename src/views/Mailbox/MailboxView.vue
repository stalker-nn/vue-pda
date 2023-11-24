<template>
  <div class="view-wrapper">
    <h1>Mailboxes</h1>
    <v-btn prepend-icon="mdi-plus">ADD</v-btn>
    <v-table>
      <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-left">Email</th>
        <th class="text-left">Displayname</th>
        <th class="text-left">Domain ID</th>
        <th class="text-left">Virtual Mailbox</th>
        <th class="text-left">Quota Storage</th>
        <th class="text-left">Quota Message</th>
        <th class="text-left">Description</th>
        <th class="text-left">Enable</th>
        <th class="text-left">Created At</th>
        <th class="text-left">Updated At</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="mailbox in mailboxes" :key="mailbox.id">
        <td>{{ mailbox.id }}</td>
        <td>{{ mailbox.email }}</td>
        <td>{{ mailbox.displayname }}</td>
        <td>{{ mailbox.domain_id }}</td>
        <td>{{ mailbox.virtual_mailbox }}</td>
        <td>{{ mailbox.quota_storage }}</td>
        <td>{{ mailbox.quota_message }}</td>
        <td>{{ mailbox.description }}</td>
        <td>{{ mailbox.enable }}</td>
        <td>{{ mailbox.created_at }}</td>
        <td>{{ mailbox.updated_at }}</td>
      </tr>
      </tbody>
    </v-table>
  </div>

</template>

<script setup lang="ts">
import axios from "axios";
import {onMounted, ref} from "vue";
import type {IMailbox} from "@/models/Mailbox.types";
import {environment} from "@/environments/environment";

const mailboxes = ref<IMailbox[]>([])

onMounted(() => {
  axios.get(`${environment.apiUrl}/api/mailboxes`)
      .then(res => {
        mailboxes.value = res.data
      })
})
</script>

<style scoped>
.view-wrapper {
  padding: 2rem;
}
</style>