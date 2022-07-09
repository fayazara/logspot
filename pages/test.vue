<template>
  <main class="flex bg-slate-100">
    <aside
      class="border-r w-16 h-screen bg-sky-600 sticky top-0 flex flex-col items-center justify-between py-8 flex-shrink-0"
    >
      <base-icon
        name="fluent:app-folder-48-regular"
        class="h-7 w-7 text-white"
      />
      <div class="relative">
        <button @click="showChangelog = !showChangelog">
          <base-icon
            name="fluent:notepad-24-regular"
            class="h-7 w-7 text-white"
          />
        </button>
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div
            v-if="showChangelog"
            class="h-[450px] w-80 bg-white rounded-lg shadow-2xl absolute left-[calc(50%+14px)] bottom-[calc(50%+14px)] origin-bottom-left overflow-hidden"
            ref="floatingWidget"
          >
            <div
              v-if="!iframeLoaded"
              class="h-full w-full flex items-center justify-center flex-col space-y-2 text-slate-700"
            >
              <base-spinner class="h-5 w-5" />
              <p>Loading Feed</p>
            </div>
            <iframe
              src="http://localhost:3000/widget"
              class="h-full w-full"
              :class="iframeLoaded ? 'opacity-100' : 'opacity-0'"
              frameborder="0"
              @load="iframeLoaded = true"
            ></iframe>
          </div>
        </transition>
      </div>
    </aside>
    <section class="p-4 flex-grow overflow-x-auto">
      <div class="max-w-4xl mx-auto py-12">
        <div class="prose max-w-none">
          <h1>This is a test page</h1>
          <button
            class="bg-slate-900 px-4 py-2 rounded-lg text-white"
            @click="sidebar = true"
          >
            Open Changelog as an overlay &rarr;
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            mollitia facilis sunt eius quos iusto, nihil recusandae tenetur
            optio nemo corporis debitis aliquam perferendis voluptatem,
            provident tempore cum, libero alias?
          </p>
          <img
            src="https://source.unsplash.com/random/1280x720"
            alt="Random Image"
            class="rounded-lg border"
          />
          <h3>This is a sub heading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magni
            facere deserunt nulla totam error sequi beatae blanditiis qui
            exercitationem sit eius dignissimos, nobis ullam similique fuga
            iusto quo reprehenderit?
          </p>
          <img
            src="https://source.unsplash.com/random/1280x720?random=123123"
            alt="Random Image"
            class="rounded-lg border"
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            quas. Voluptatibus magni recusandae amet nihil maxime. Ipsam quas
            similique nisi sequi cupiditate quia, quo consequatur atque facere
            excepturi, totam et.
          </p>
        </div>
      </div>
    </section>
    <!-- // Slide over widget -->
    <base-sidebar v-if="sidebar" @close="sidebar = false" ref="overlayWidget" />
    <!-- // Slide over widget -->
  </main>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
const showChangelog = ref(false);
const iframeLoaded = ref(false);
const sidebar = ref(false);
const floatingWidget = ref(null);
const overlayWidget = ref(null);

onClickOutside(floatingWidget, () => (showChangelog.value = false));
onClickOutside(overlayWidget, () => (sidebar.value = false));
</script>

<style scoped>
.fade-enter-active {
  @apply duration-500 ease-out;
}
.fade-enter-from {
  @apply transform opacity-0;
}
.fade-enter-to {
  @apply opacity-100;
}
.fade-leave-active {
  @apply transform duration-500 ease-in;
}
.fade-leave-from {
  @apply opacity-100;
}
.fade-leave-to {
  @apply opacity-0;
}
</style>
