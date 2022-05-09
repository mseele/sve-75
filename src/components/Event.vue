<template>
  <div
    class="relative overflow-hidden rounded-2xl bg-rose-500 px-6 py-10 shadow-xl sm:px-12 sm:py-20"
  >
    <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
      <svg
        class="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1463 360"
      >
        <path
          class="text-rose-400 text-opacity-40"
          fill="currentColor"
          d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
        />
        <path
          class="text-rose-600 text-opacity-40"
          fill="currentColor"
          d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
        />
      </svg>
    </div>
    <div class="relative">
      <div class="sm:text-center">
        <h2
          class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
        >
          {{ title }}
        </h2>
        <div class="mx-auto mt-6 max-w-2xl text-lg text-rose-100">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
