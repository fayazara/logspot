<template>
  <main class="min-h-screen relative">
    <hero />
    <!-- // Remove this once you clone the template -->
    <github />
    <!-- // Remove this once you clone the template -->
    <section
      class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <post v-for="post in data" :content="post" />
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
</script>
