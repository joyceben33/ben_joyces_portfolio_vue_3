<template>
  <v-icon :style="{ height: definedSize, width: definedSize }">
    <svg :width="definedSize" :height="definedSize" viewBox="0 0 24 24" fill="currentColor" v-html="iconSvg"></svg>
  </v-icon>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { SimpleIcon } from 'simple-icons';

const SizeSet = ref({
  sm: '12px',
  md: '24px',
  lg: '36px',
  xl: '48px',
});

type Sizes = keyof typeof SizeSet.value;

const props = defineProps<{
  icon: SimpleIcon;
  size?: Sizes;
}>();

const definedSize = computed(() => (props.size ? SizeSet.value[props.size] : SizeSet.value.md));
const iconSvg = computed(() => props.icon.svg);
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: middle;
}
</style>
