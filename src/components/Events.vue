<template>
  <div id="feier" class="relative mt-24 sm:mt-32 sm:py-16">
    <div aria-hidden="true" class="hidden sm:block">
      <div class="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
      <svg
        class="absolute top-8 left-1/2 -ml-3"
        width="404"
        height="392"
        fill="none"
        viewBox="0 0 404 392"
      >
        <defs>
          <pattern
            id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
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
          fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
        />
      </svg>
    </div>
    <div
      class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Event title="Samstag, 9. Juli">
          <ul class="space-y-1">
            <li>Einlagespiele</li>
            <li>Fitness-Schnupperkurse</li>
            <li>Kinderprogramm und Hüpfburg</li>
            <li>Kuchenbuffet</li>
            <li>Sportlerparty ab 19 Uhr</li>
          </ul>
        </Event>
        <Event title="Sonntag, 10. Juli">
          <ul class="space-y-1">
            <li>
              Frühshoppen mit
              <a
                href="http://heimathelden.net/"
                target="_blank"
                rel="”noreferrer”"
                class="underline hover:text-rose-200"
                >HEIMATHELDEN</a
              >
              (ab 11 Uhr)
            </li>
            <li>Mittagstisch</li>
            <li>Kinderprogramm und Hüpfburg</li>
            <li>Kuchenbuffet</li>
            <li>Einlagespiele</li>
            <li>
              Zeltspektakel mit
              <a
                href="https://honk-blow.de/"
                target="_blank"
                rel="”noreferrer”"
                class="underline hover:text-rose-200"
                >HONK & BLOW</a
              >
              (ab 16 Uhr)
            </li>
          </ul>
        </Event>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
