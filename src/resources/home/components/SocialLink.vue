<script setup lang="ts">

import { SocialLinkProps } from '../interfaces/props'
import SocialIcons from './SocialIcons.vue';

const props = defineProps<SocialLinkProps>()

</script>


<template>
  <a :href="props.url" class="social-link" target="_blank">
    <SocialIcons :size="props.style.size || 'xl'" :icon="props.style.icon" :color="props.style.color" />
  </a>
</template>


<style scoped>
.social-link {
  @apply flex overflow-hidden flex-1 items-center justify-center w-[32px] h-[32px] cursor-pointer
}
</style>