
<script setup lang="ts">
import Header from '@/resources/home/components/Header.vue';
import Main from '@/resources/home/components/Main.vue'
import Footer from '@/resources/home/components/Footer.vue'
</script>


<template>
  <Header />
  <Main />
  <Footer />
</template>

<style scoped>
.home-header {
  grid-area: "head"
}
</style>