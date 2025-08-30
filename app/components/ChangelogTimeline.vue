<script lang="ts" setup>
import { useTimeAgo } from '@vueuse/core';

interface ChangelogAuthor {
  name: string;
  avatar?: string;
}
interface ChangelogEntry {
  title: string;
  description?: string;
  authors?: ChangelogAuthor[];
  date: string;
  [key: string]: unknown;
}

const { data } = await useAsyncData<ChangelogEntry[]>('changelog-list', () =>
  // queryCollection is auto-imported by @nuxt/content
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  queryCollection('changelog').sort({ date: -1 }).all()
);

const items = computed(() => {
  const list = Array.isArray(data.value) ? (data.value as ChangelogEntry[]) : []
  return list.map((entry: ChangelogEntry) => {
    const firstAuthor =
      Array.isArray(entry.authors) && entry.authors.length > 0
        ? entry.authors[0]
        : null;
    return {
      title: entry.title,
      date: entry.date,
      description: entry.description,
      avatar: firstAuthor?.avatar ? { src: firstAuthor.avatar } : undefined,
      entry,
    } as {
      title: string;
      date: string;
      description?: string;
      avatar?: { src: string };
      entry: ChangelogEntry;
    };
  });
});
</script>

<template>
  <section class="pb-24">
    <h2 class="text-xl font-semibold">Changelog</h2>
    <UTimeline
      :items="items"
      class="mt-6"
      :ui="{
        description: 'px-3 py-2 ring ring-default mt-2 rounded-md text-default',
      }"
    >
      <template #title="{ item }">
        <span>{{ item.title }}</span>
      </template>

      <template #date="{ item }">
        {{ useTimeAgo(new Date(item.date)) }}
      </template>

      <template #description="{ item }">
        <ContentRenderer :value="item.entry" :prose="true" />
      </template>

      <template #footer="{ item }">
        <div
          v-if="item.entry?.authors?.length"
          class="flex items-center gap-2 mt-2 text-muted text-sm"
        >
          <UAvatar
            v-for="(author, i) in item.entry.authors"
            :key="i"
            :src="author.avatar"
            :alt="author.name"
            size="2xs"
          />
          <span>
            {{
              item.entry.authors.map((a: ChangelogAuthor) => a.name).join(', ')
            }}
          </span>
        </div>
      </template>
    </UTimeline>
  </section>
</template>
