<script setup lang="ts">

import { SocialLinkProps } from '../interfaces/props'
import SocialIcons from './SocialIcons.vue';
import { ref } from 'vue'
const props = defineProps<SocialLinkProps>()

const hoverColor = ref<string>('')
function applyStyle() {
  if (props.style.hover)
    hoverColor.value = props.style.hover
}

function removeStyle() {
  hoverColor.value = ''
}

</script>


<template>
  <a @mouseover="applyStyle" @mouseout="removeStyle" :href="props.url" class="social-link" target="_blank">
    <SocialIcons :size="props.style.size || 'xl'" :icon="props.style.icon" :color="props.style.color || hoverColor" />
  </a>
</template>


<style scoped>
.social-link {
  @apply flex overflow-hidden flex-1 items-center justify-center w-[32px] h-[32px] cursor-pointer
}
</style>