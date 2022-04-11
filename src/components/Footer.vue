<template>
  <footer class="bg-white">
    <div
      class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-gray-400 hover:text-gray-500"
          target="_blank"
          rel="noreferrer"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-base text-gray-400">
          &copy; 2022 SV Eutingen 1947 e.V.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Facebook from '@/assets/facebook.svg?component'
import Instagram from '@/assets/instagram.svg?component'
import Fussball_de from '@/assets/fussball_de.svg?component'

const navigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/sveutingen',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sveutingen1947',
    icon: Instagram,
  },
  {
    name: 'Fussball.de',
    href: 'http://www.fussball.de/verein/sv-eutingen-wuerttemberg/-/id/00ES8GNAUG000068VV0AG08LVUPGND5I',
    icon: Fussball_de,
  },
]
</script>
