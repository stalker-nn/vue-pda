<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="bg-grey pa-5" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="400" title="Sign In">
        <v-form fast-fail @submit.prevent="login">
          <v-text-field v-model="email" label="E-mail"></v-text-field>

          <v-text-field v-model="password" label="Password"></v-text-field>

          <v-btn type="submit" color="primary" block class="mt-2">Login</v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
const email = null
const password = null

function login() {
  return false
}
</script>

<style scoped>

</style>