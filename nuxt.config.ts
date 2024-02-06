// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      htmlAttrs: { class: "scroll-smooth" },
      bodyAttrs: { class: "font-inter antialiased bg-slate-900 text-slate-100 tracking-tight" },
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  components: {
    dirs: ["partials", "components"],
  },
  tailwindcss: {
    configPath: "~~/tailwind.config.js",
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  css: [
    "aos/dist/aos.css",
    "~/assets/css/style.css",
  ],
  vite: {
    define: { 
      
      __GRAD_COLOR1__: JSON.stringify("#33dd55"),
      __GRAD_COLOR2__: JSON.stringify("#6366F1") 
    }
  },
  srcDir: "src",
})
