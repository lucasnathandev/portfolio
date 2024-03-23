<script setup lang="ts">
  import Social from '@/resources/home/components/Social.vue';

</script>

<template>
  <header class="">
  </header>
  <router-view></router-view>
  <footer>
    <Social />
  </footer>
</template>

<style scoped>

  header {
    grid-area: "header";
  }

  footer {
    grid-area: "footer";
  }

</style>
