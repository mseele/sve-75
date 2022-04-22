import { defineConfig } from 'iles'
import images, { hdPreset } from '@islands/images'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  siteUrl: 'https://75.sv-eutingen.de',
  modules: [
    images(
      {
        card: hdPreset({
          widths: [200, 400, 800, 1200, 1800],
          sizes: '(min-width: 1536px) 30vw, (min-width: 1024px) 50vw, 100vw',
          formats: {
            avif: { quality: 55 },
            webp: { quality: 55 },
            jpg: { quality: 55 },
          },
        }),
      },
      { cacheDir: '_cache' }
    ),
  ],
  vite: {
    plugins: [svgLoader()],
  },
})
