<script setup lang="ts">

import { SocialIconProps } from '../interfaces/props'

const props = defineProps<SocialIconProps>()


</script>

<template>
  <font-awesome-icon class="icon-hover" :size="props.size" :icon="'fab fa-' + props.icon"
    :color="props.color"></font-awesome-icon>
</template>

<style scoped>
.icon-hover {
  @apply delay-100 transition-all ease-in-out
}
</style>