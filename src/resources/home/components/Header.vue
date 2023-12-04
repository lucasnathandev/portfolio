<script setup lang="ts">
import Social from '@/resources/home/components/Social.vue';
import Profile from '@/resources/profile/components/Profile.vue';
</script>


<template>
  <header class="px-2 w-full home-header">
    <h1 class="text-3xl w-full font-bold py-3 text-center text-anti-flash_white">Lucas Nathan Henrique da Silva</h1>
    <Profile />
    <Social />
  </header>
</template>

<style scoped>
.home-header {
  grid-area: "head"
}
</style>