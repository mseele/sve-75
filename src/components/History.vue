<template>
  <div id="historie" class="bg-white">
    <div
      class="mx-auto max-w-md py-16 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-20 lg:px-8"
    >
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2
            class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Zehn Highlights aus 75 Jahre SVE
          </h2>
          <p class="mt-6 max-w-3xl text-base leading-7 text-gray-500">
            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
            urna sed consectetur neque tristique pellentesque. Blandit amet, sed
            aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
            porttitor vitae ut. Amet vitae fames senectus vitae.
          </p>
          <div class="mt-6">
            <a href="#feier" class="text-base font-medium text-rose-500">
              Mehr Historie gibt's am 9. und 10. Juli&nbsp&rarr;
            </a>
          </div>
        </div>
        <div class="mt-12 lg:col-span-2 lg:mt-0">
          <dl class="space-y-8">
            <div v-for="(item, index) in items" :key="index">
              <dt class="text-lg font-medium leading-6 text-gray-900">
                {{ item.title }}
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                {{ item.content }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    title: '1947',
    content: 'Vereinsgründung',
  },
  {
    title: '17. Mai 1950',
    content:
      'Erster Meistertitel unserer Herrenfussballmannschaft in der A-Klasse',
  },
  {
    title: '9. Juni 1969',
    content:
      'Fertigstellung des ersten Sportheims in der Marktstraße 76. Unser Heimatort für legendäre 50 Jahre. Mit Fest und Pokalturnier wird der Sportheimneubau einschließlich Kegelbahn eingeweiht. Insgesamt wurden rund 15.000 Stunden Arbeitseinsatz geleistet!',
  },
  {
    title: '1976',
    content: 'Bau des heutigen Rasenplatzes südlich des Eutinger Talbachs',
  },
  { title: 'Herbst 1981', content: 'Frauenfussball beginnt beim SVE' },
  {
    title: '21. März 1987',
    content:
      'Schicksalsschlag, als SVE-Vorsitzender Albrecht Schmollinger während der Jahreshauptversammlung zusammenbricht und stirbt',
  },
  {
    title: '15. Juni 1997',
    content:
      'Sportliches Highlight der Herren mit dem erstmaligen Aufstieg in die Bezirksklasse',
  },
  {
    title: '24. bis 27. Juli 1998',
    content:
      'SVE feiert sein 50-jähriges Jubiläum mit großem Fest, Woodpeckers, McSunday, Semsakrebsler und Gäupokalturnier',
  },
  {
    title: 'September 2007',
    content: 'Erste Gespräche mit Gemeinde zum Bau eines Kunstrasenspielfelds',
  },
  {
    title: '2016 bis 2018',
    content:
      'Bau von Kunstrasen und neuem Sportheim. Verein bewältigt Projekte im Umfang von 3,5 Mio. Euro',
  },
]
</script>
