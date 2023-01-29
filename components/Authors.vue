<template>
  <div class="flex -space-x-2 relative z-0 overflow-hidden mt-6">
    <img
      v-for="(author, i) in authors"
      :key="i"
      class="relative inline-block h-8 w-8 rounded-full ring-2 ring-white"
      :style="{ zIndex: authors.length - i }"
      :src="author.avatar"
      alt=""
    />
  </div>
</template>

<script setup>
const props = defineProps({
  authors: Array,
});
</script>
