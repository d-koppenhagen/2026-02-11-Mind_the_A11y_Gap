<template>
  <a :href="url" :target="target" class="text-2xl pt-10">
    🔗 Open Storybook Demo
  </a>
</template>

<script setup>
const props = defineProps({
  story: String,
  target: String
});

const base = import.meta.env.DEV 
  ? 'http://localhost:6006' 
  : '/2026-02-11-Mind_the_A11y_Gap/storybook';

const url = `${base}/?path=/story/${props.story}`;
</script>
