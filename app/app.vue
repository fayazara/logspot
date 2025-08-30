<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
const { seo } = useAppConfig();

useSeoMeta({
  title: seo.title,
  description: seo.description,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogImage: seo.image,
  ogUrl: seo.url,
});
</script>
