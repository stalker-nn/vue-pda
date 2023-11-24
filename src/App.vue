<template>
    <component :is="layout">
    </component>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import {computed} from "vue";
const route = useRoute()

const layout = computed(() => {
  return route.meta.layout || 'default'
})
</script>


<style scoped>
</style>
