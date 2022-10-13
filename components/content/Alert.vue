<script setup>
defineProps({
  icon: {
    type: String,
    default: "fluent:error-circle-24-regular",
  },
  variant: {
    type: String,
    default: "primary",
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>

<template>
  <div
    class="relative p-4 border-l-4 my-8 rounded-lg rounded-bl-sm alert"
    :class="variant"
  >
    <span class="icon-container">
      <icon :name="icon" class="h-7 w-7 icon" :class="variant" />
    </span>
    <div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style>
.alert.primary {
  @apply bg-primary border-primary bg-opacity-10;
}
.icon.primary {
  @apply text-primary;
}
.alert.success {
  @apply bg-green-600 border-green-600 bg-opacity-10;
}
.icon.success {
  @apply text-green-600;
}
.alert.danger {
  @apply bg-rose-500 border-rose-500 bg-opacity-10;
}
.icon.danger {
  @apply text-rose-500;
}

.icon-container {
  @apply h-10 w-10 flex items-center justify-center rounded-full bg-white absolute top-0 left-0;
  transform: translate(calc(-50% - 1.5px), -50%);
}
</style>
