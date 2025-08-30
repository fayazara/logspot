<template>
  <UContainer class="max-w-4xl">
    <HeroSection />
    <UTimeline :items="items">
      <template #date="{ item }">
        <span class="text-dimmed text-xs/5">{{
          useDateFormat(item.date, 'MMM d, YYYY')
        }}</span>
      </template>
      <template #title="{ item }">
        <div class="mb-3">
          <h2 class="text-2xl font-bold">{{ item.title }}</h2>
        </div>
      </template>

      <template #description="{ item }">
        <div>
          <ContentRenderer
            v-if="item"
            :value="item"
            class="prose max-w-none prose-img:rounded-md dark:prose-invert"
          />
        </div>
      </template>
    </UTimeline>
    <ThemeToggleButton />
  </UContainer>
</template>

<script setup lang="ts">
const { data: items } = await useAsyncData(
  'changelog-items',
  () => queryCollection('changelog').all(),
  { default: () => [] }
);
</script>
