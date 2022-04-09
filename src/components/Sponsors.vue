<template>
  <div class="mt-32">
    <div
      class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
        <div>
          <h2
            class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Backed by world-renowned investors
          </h2>
          <p class="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
            urna sed consectetur neque tristique pellentesque. Blandit amet, sed
            aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
            porttitor vitae ut. Amet vitae fames senectus vitae.
          </p>
          <div class="mt-6">
            <a href="#" class="text-base font-medium text-rose-500">
              Meet our investors and advisors&nbsp&rarr;
            </a>
          </div>
        </div>
        <div
          class="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2"
        >
          <div
            v-for="logo in logos"
            :key="logo.name"
            class="col-span-1 flex justify-center bg-gray-50 py-8 px-8"
          >
            <img class="max-h-12" :src="logo.url" :alt="logo.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  {
    name: "Transistor",
    url: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
  },
  {
    name: "Mirage",
    url: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
  },
  {
    name: "Tuple",
    url: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
  },
  {
    name: "Laravel",
    url: "https://tailwindui.com/img/logos/laravel-logo-gray-400.svg",
  },
  {
    name: "StaticKit",
    url: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
  },
  {
    name: "Workcation",
    url: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
  },
];
</script>
