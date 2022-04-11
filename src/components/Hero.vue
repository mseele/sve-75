<template>
  <div class="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
    <div
      class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8"
    >
      <div>
        <div>
          <Logo class="h-16 w-auto" alt="VSE" />
        </div>
        <div class="mt-20">
          <div>
            <a href="#feier" class="inline-flex space-x-4">
              <span
                class="rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-rose-500"
              >
                75 Jahre
              </span>
              <span
                class="inline-flex items-center space-x-1 text-sm font-medium text-rose-500"
              >
                <span>Feiert mit uns</span>
                <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </a>
          </div>
          <div class="mt-6 sm:max-w-xl">
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
            >
              75 Jahre SV Eutingen
            </h1>
            <p class="mt-6 text-xl text-gray-500">
              Wir blicken zurück und wollen unser Jubiläum gebührend feiern.
              Seit dabei und erlebt eine schöne Zeit gemeinsam mit uns.
            </p>
          </div>
          <div class="mt-6">
            <a href="#feier">
              <div class="inline-flex items-center divide-x divide-gray-300">
                <div class="flex flex-shrink-0 pr-5">🎉 🤘 🎁 🎈 🥳</div>
                <div
                  class="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3"
                >
                  <span class="font-medium text-gray-900">Sei dabei</span>
                  am
                  <span class="font-medium text-rose-500">9. und 10. Juli</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
      <div
        class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <div class="hidden sm:block">
          <div
            class="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full"
          />
          <svg
            class="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="392"
              fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
            />
          </svg>
        </div>
        <div
          class="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12"
        >
          <Picture
            class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
            src="@/assets/party.jpg?preset=card"
            alt=""
          />
          <!-- <img
            class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
            src="https://tailwindui.com/img/component-images/task-app-rose.jpg"
            alt=""
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/assets/logo.svg?component'
import { ChevronRightIcon } from '@heroicons/vue/solid'
</script>
