<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="relative z-10"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <transition
      enter-active-class="ease-in-out duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in-out duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 bg-gray-100 bg-opacity-50 backdrop-blur-sm transition-opacity"
      ></div>
    </transition>
    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
        >
          <transition
            enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
          >
            <div v-if="show" class="pointer-events-auto w-screen max-w-md">
              <div class="h-full overflow-y-scroll bg-white shadow-xl">
                <!-- The Feed iframe goes here -->
                <div
                  v-if="!iframeLoaded"
                  class="h-full w-full flex items-center justify-center flex-col space-y-2 text-slate-700"
                >
                  <base-spinner class="h-5 w-5" />
                  <p>Loading Feed</p>
                </div>
                <iframe
                  src="https://logspot.vercel.app/widget"
                  class="h-full w-full"
                  :class="iframeLoaded ? 'opacity-100' : 'opacity-0'"
                  frameborder="0"
                  @load="iframeLoaded = true"
                ></iframe>
                <!-- The Feed iframe goes here -->
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
const iframeLoaded = ref(false);

onMounted(() => {
  show.value = true;
});
</script>

<style></style>
