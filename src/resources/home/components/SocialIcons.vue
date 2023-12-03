<script setup lang="ts">

import { SocialIconProps } from '../interfaces/props'

const props = defineProps<SocialIconProps>()


</script>

<template>
  <font-awesome-icon :size="props.size" :icon="'fab fa-' + props.icon" :color="props.color"></font-awesome-icon>
</template>

<style scoped></style>