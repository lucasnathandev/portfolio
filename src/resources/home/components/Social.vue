
<script setup lang="ts">

import { Icon } from '../interfaces/props';
import SocialLink from './SocialLink.vue';

const iconSize = 'xl'
const socialLinks: { socialIcon: Icon, url: string, hover?: string }[] = [
  { socialIcon: Icon.github, url: 'https://github.com/lucasnathandev', hover: '#4078c0' },
  { socialIcon: Icon.linkedin, url: 'https://www.linkedin.com/in/lucas-nathan-h-silva/', hover: '#0a66c2' },
  { socialIcon: Icon.instagram, url: 'https://www.instagram.com/lucas.nathan.5682/', hover: "#c13584" },
  { socialIcon: Icon.twitter, url: 'https://twitter.com/lucasnathandev', hover: '#1da1f2' }
]



</script>



<template>
  <div class="social">
    <SocialLink v-for="link in socialLinks" :url="link.url"
      :style="{ icon: link.socialIcon, size: iconSize, hover: link.hover }" />
  </div>
</template>

<style scoped>
.social {
  @apply gap-3 flex flex-1 items-center bg-myrtle_green-100 justify-around p-3 max-w-[320px];
}
</style>