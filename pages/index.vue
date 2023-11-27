<template>
  <main class="min-h-screen relative">
    <hero />
    <!-- // Remove this once you clone the template -->
    <github />
    <!-- // Remove this once you clone the template -->
    <section
      class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <post v-for="post in sorted_data" :content="post" />
    </section>
  </main>
</template>

<script setup>
import seoConfig from "../seoConfig/index";
useHead({
  title: seoConfig.title,
  meta: [
    {
      name: "description",
      content: seoConfig.description,
      meta: [
        { name: "og:title", content: seoConfig.og.title },
        { name: "og:description", content: seoConfig.og.description },
        { name: "og:image", content: seoConfig.og.image },
        { name: "og:url", content: seoConfig.og.url },
        { name: "twitter:title", content: seoConfig.og.title },
        { name: "twitter:description", content: seoConfig.og.description },
        { name: "twitter:image", content: seoConfig.og.image },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    },
  ],
});
const { data } = await useAsyncData("feed", () =>
  queryContent("/posts").find()
);
const sorted_data = data.value.sort((a, b) => {
  const a_version = a.version.split('.').map(Number);
  const b_version = b.version.split('.').map(Number);
  const max_length = Math.max(a_version.length, b_version.length);
  for (let i = 0; i < max_length; i++) {
    const a_part = a_version[i] || 0;
    const b_part = b_version[i] || 0;
    if (a_part < b_part) {
      return 1;
    } else if (a_part > b_part) {
      return -1;
    }
  }
  return 0;
});

</script>
