import { defineConfig } from 'astro/config'

// TODO: set this to the real domain once it's decided. Used for canonical
// URLs and the absolute social share image URL.
export default defineConfig({
  site: 'https://example.com',
  server: { port: 3000 },
})
