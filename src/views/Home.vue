<script setup lang="ts">
  import Social from '@/resources/home/components/Social.vue';

</script>

<style scoped></style>

<template>
  <main>
    <article class="about-wrapper">
      <section class="profile">
        <img src="" alt="">
        <h1 class="text-3xl w-full font-bold py-3 text-center text-anti-flash_white">Lucas Nathan H. Silva</h1>
        <Social />
      </section>
    </article>
    <article class="content-wrapper">
      <section class="technologies">
      </section>
      <section class="projects"></section>
    </article>
  </main>
</template>

<style scoped>

  main {
    grid-area: main;
  }

</style>