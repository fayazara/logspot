<template>
  <main class="flex bg-slate-100 relative">
    <aside
      class="border-r w-20 h-screen bg-slate-100 sticky top-0 flex flex-col items-center justify-between py-8 flex-shrink-0"
    >
      <!-- Sample Logo  -->
      <svg
        class="h-8 w-auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          class="ccompli1"
          fill="#007AFF"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          class="ccustom"
          fill="#312ECB"
        ></path>
      </svg>
      <!-- Sample Logo  -->
      <div class="space-y-8">
        <icon name="fluent:channel-24-regular" class="h-6 w-6 text-sky-600" />
        <icon
          name="fluent:data-pie-24-regular"
          class="h-6 w-6 text-slate-400"
        />
        <icon
          name="fluent:mail-inbox-24-regular"
          class="h-6 w-6 text-slate-400"
        />
        <icon
          name="fluent:wallet-credit-card-24-regular"
          class="h-6 w-6 text-slate-400"
        />
      </div>
      <div class="space-y-8">
        <button @click="sidebar = true" class="relative">
          <icon
            name="fluent:panel-right-28-filled"
            class="h-6 w-6 text-slate-400"
          />
        </button>
        <div class="relative" ref="floatingWidget">
          <button @click="showChangelog = !showChangelog">
            <icon
              name="fluent:alert-badge-24-filled"
              class="h-6 w-6 text-slate-400"
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
              class="h-[450px] w-80 z-20 bg-white rounded-lg shadow-2xl absolute left-[calc(50%+14px)] bottom-[calc(50%+14px)] origin-bottom-left overflow-hidden border border-gray-100"
            >
              <div
                v-if="!iframeLoaded"
                class="h-full w-full flex items-center justify-center flex-col space-y-2 text-slate-700"
              >
                <base-spinner class="h-5 w-5" />
                <p>Loading Feed</p>
              </div>
              <iframe
                src="/widget"
                class="h-full w-full"
                :class="iframeLoaded ? 'opacity-100' : 'opacity-0'"
                frameborder="0"
                @load="iframeLoaded = true"
              ></iframe>
            </div>
          </transition>
        </div>
      </div>
    </aside>
    <section class="flex-grow">
      <header
        class="border-b p-4 flex items-center justify-between sticky top-0 bg-white"
      >
        <div
          class="flex w-full sm:w-1/2 p-3 items-center bg-slate-200 rounded-full"
        >
          <icon name="fluent:search-24-filled" class="h-4 w-4 text-slate-400" />
          <p class="text-sm text-slate-400 ml-4 truncate">
            Search your transactions, accounts, cards etc...
          </p>
        </div>
        <div class="hidden sm:flex items-center space-x-2">
          <div
            class="rounded-full bg-slate-200 p-3 flex-shrink-0 h-12 w-12 flex items-center justify-center"
          >
            <icon
              name="fluent:alert-badge-24-filled"
              class="h-5 w-5 text-slate-600"
            />
          </div>
          <div
            class="rounded-full bg-slate-200 p-3 flex-shrink-0 h-12 w-12 flex items-center justify-center"
          >
            <icon
              name="fluent:person-24-filled"
              class="h-5 w-5 text-slate-600"
            />
          </div>
        </div>
      </header>
      <div class="p-4">
        <div class="mt-4 space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div
              class="h-40 rounded-lg bg-white border shadow-sm"
              v-for="n in 4"
              :key="n"
            ></div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              class="h-96 rounded-lg bg-white border shadow-sm"
              v-for="n in 4"
              :key="n"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <test-sidebar v-if="sidebar" @close="sidebar = false" ref="overlayWidget" />
    <test-arrow v-if="!showChangelog" class="fixed bottom-24 left-32 z-0" />
  </main>
</template>

<script setup>
import { ref } from "vue";
const showChangelog = ref(false);
const iframeLoaded = ref(false);
const sidebar = ref(false);
const floatingWidget = ref(null);
useClickOutside(floatingWidget, () => (showChangelog.value = false));
</script>

<style scoped>
.icon {
  display: block !important;
}
</style>
