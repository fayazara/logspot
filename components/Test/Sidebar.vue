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
        class="fixed inset-0 bg-gray-700 bg-opacity-50 backdrop-blur-sm transition-opacity"
      ></div>
    </transition>
    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
        >
          <transition
            enter-active-class="transform transition ease-in-out duration-500"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transform transition ease-in-out duration-500"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
          >
            <div
              v-if="show"
              class="pointer-events-auto w-screen max-w-md relative"
              ref="slideOver"
            >
              <div
                class="absolute top-0 left-0 -ml-8 flex pt-2 pr-2 sm:-ml-10 sm:pr-4"
              >
                <button
                  @click="close"
                  type="button"
                  class="rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-white h-8 w-8 flex items-center justify-center"
                >
                  <span class="sr-only">Close panel</span>

                  <icon name="fluent:dismiss-24-filled" class="h-6 w-6" />
                </button>
              </div>
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
                  src="/widget"
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
const emit = defineEmits(["close"]);
import { ref } from "vue";
const show = ref(false);
const iframeLoaded = ref(false);
function close() {
  show.value = false;
  setTimeout(() => {
    document.body.style.removeProperty("overflow");
    emit("close");
  }, 500);
}
const slideOver = ref(null);
useClickOutside(slideOver, () => close());
onMounted(() => {
  show.value = true;
  document.body.style.setProperty("overflow", "hidden");
});
</script>
