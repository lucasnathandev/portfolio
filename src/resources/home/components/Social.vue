
<script setup lang="ts">

import { Icon } from '../interfaces/props';
import SocialLink from './SocialLink.vue';

const iconSize = 'xl'


</script>



<template>
  <div class="social">
    <SocialLink :url="'https://github.com/lucasnathandev'" :style="{ icon: Icon.github, size: iconSize }" />
    <SocialLink :url="'https://www.linkedin.com/in/lucas-nathan-h-silva/'"
      :style="{ icon: Icon.linkedin, size: iconSize }" />
    <SocialLink :url="'https://www.instagram.com/lucas.nathan.5682/'" :style="{ icon: Icon.instagram, size: iconSize }" />

  </div>
</template>

<style scoped>
.social {
  @apply gap-3 flex flex-1 items-center bg-myrtle_green-100 justify-around p-3 max-w-[320px];
}
</style>