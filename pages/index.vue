<template>
  <main class="min-h-screen">
    <hero />
    <section class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden">
      <post v-for="post in data" :content="post" />
    </section>
  </main>
</template>

<script setup>
const { data } = await useAsyncData("feed", () =>
  queryContent("/posts").find()
);
</script>
