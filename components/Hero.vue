<template>
  <header class="py-12 px-4 sm:px-6 lg:px-8">
    <div class="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-20">
      <div class="flex items-center justify-center space-x-3">
        <img loading="lazy" src="/logo.png" alt="Logspot" class="h-20 w-20" />
        <h1
          class="text-4xl font-extrabold tracking-tight text-slate-700 sm:text-5xl"
        >
          logspot
        </h1>
      </div>
      <p class="mt-4 text-base leading-7 text-slate-600">
        Logspot is an open source change log template made with Nuxt, Vue, and
        Tailwindcss. Subscribe to our newsletter to get the latest updates or
        follow us on
        <a
          class="text-primary underline"
          href="https://twitter.com/fayazara"
          target="_blank"
          >twitter</a
        >.
      </p>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.form-input {
  @apply block h-10 w-full rounded-md bg-white pr-3 pl-12 text-slate-900 shadow-md shadow-black/5 ring-1 ring-slate-900/5 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6;
}
.form-submit {
  @apply inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 ml-4 flex-none;
}
</style>
