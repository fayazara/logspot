<template>
  <main class="min-h-screen bg-white">
    <header
      class="py-4 px-2.5 sticky top-0 z-50 bg-white bg-opacity-50 backdrop-blur border-b border-slate-100"
    >
      <h1 class="text-gray-500 flex items-center text-sm">
        <span class="h-3 w-3 mr-2 rounded-full bg-primary"></span>
        <span class="font-semibold"> Latest changes </span>
      </h1>
    </header>
    <section class="min-h-[calc(100vh-102px)] pt-4">
      <div
        class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <post v-for="(post, i) in data" :content="post" :key="i" />
      </div>
    </section>
    <footer
      class="px-4 py-3 flex items-center justify-between sticky bottom-0 z-50 bg-white bg-opacity-50 backdrop-blur-xl text-xs border-t border-slate-100"
    >
      <a
        class="text-gray-500"
        href="https://github.com/fayazara/logspot"
        target="_blank"
      >
        Powered by logspot
      </a>
      <a
        class="text-primary"
        href="https://github.com/fayazara/logspot"
        target="_blank"
      >
        See all updates
      </a>
    </footer>
  </main>
</template>

<script setup>
const { data } = await useAsyncData("feed", () =>
  queryContent("/posts").find()
);
</script>
