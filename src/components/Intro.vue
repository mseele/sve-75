<template>
  <div class="relative mt-20">
    <div
      class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8"
    >
      <div class="relative sm:py-16 lg:py-0">
        <div
          aria-hidden="true"
          class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
        >
          <div
            class="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"
          />
          <svg
            class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
              fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
            />
          </svg>
        </div>
        <div
          class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20"
        >
          <!-- Testimonial card-->
          <div
            class="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl"
          >
            <Picture
              src="@/assets/pitch.jpg?preset=card"
              class="absolute inset-0 h-full w-full object-cover"
              alt=""
            />
            <div class="absolute inset-0 bg-rose-500 mix-blend-multiply" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90"
            />
            <div class="relative px-8">
              <blockquote class="mt-8">
                <div
                  class="relative text-lg font-medium text-white md:flex-grow"
                >
                  <svg
                    class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-rose-400"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                    />
                  </svg>
                  <p class="relative">
                    Tincidunt integer commodo, cursus etiam aliquam neque, et.
                    Consectetur pretium in volutpat, diam. Montes, magna cursus
                    nulla feugiat dignissim id lobortis amet.
                  </p>
                </div>

                <footer class="mt-4">
                  <p class="text-base font-semibold text-rose-200">
                    Sebastian Lazar, Vorstand
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        <!-- Content area -->
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <h2
            class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            75 Jahre, Wahnsinn
          </h2>
          <div class="mt-6 space-y-6 text-gray-500">
            <p class="text-base">
              Seit einem dreiviertel Jahrhundert existiert unser SVE. Ein
              dreiviertel Jahrhundert voller Emotionen. Wie oft gab es Momente,
              in denen Freudenschreie und Tränen nah beieinanderlagen. Aber wir
              wollen nichts davon vermissen.
            </p>
            <p class="text-base leading-7">
              Eines ist durch all die Jahrzehnte gleich geblieben: wir leben und
              lieben den Sport. Und wir stellen gemeinsam etwas auf die Beine.
              Dafür steht vor allem unser Herzstück, das Sportgelände, das seit
              2018 unser neues zu Hause ist.
            </p>
            <p class="text-base leading-7">
              Nachdem wir auch die Pandemie gemeistert haben, wird dieser Sommer
              etwas ganz Besonderes. Wir feiern mit Euch vom 8. bis zum 10. Juli
              2022 den 75. Geburtstag des SVE. An diesem Wochenende lassen wir
              Euch alle, unsere Freundinnen und Freunde, unsere Mitglieder und
              Partner hochleben. Denn sie machen den SVE zu dem, was er ist:
            </p>
            <p class="font-medium text-rose-500">#mehralseinverein</p>
          </div>
        </div>

        <!-- Stats section -->
        <div class="mt-10">
          <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="border-t-2 border-gray-100 pt-6"
            >
              <dt class="text-base font-medium text-gray-500">
                {{ stat.label }}
              </dt>
              <dd class="text-3xl font-extrabold tracking-tight text-gray-900">
                {{ stat.value }}
              </dd>
            </div>
          </dl>
          <div class="mt-10">
            <a href="#historie" class="text-base font-medium text-rose-500">
              Zehn Highlights aus 75 Jahre SVE&nbsp&rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { label: 'Gründung', value: '1975' },
  { label: 'Mitglieder', value: '555' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]
</script>
