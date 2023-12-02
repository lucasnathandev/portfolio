<template>
  <h1 class="w-full py-2 text-center text-3xl border-r-1">Page not found</h1>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router'
const router = useRouter()

setTimeout(() => {
  router.go(-1)
}, 3000)

</script>

<style scoped></style>