// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://storage.googleapis.com/production-os-assets/assets/fontawesome/1629704621943/4.7.0/font-awesome.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?display=swap&amp;family=Roboto+Slab%3A100%2C300%2C400%2C700%7CNoto Sans JP:100,300,400,500,700,900",
        },
      ],
    },
  },
  css: ["@/assets/styles/global.scss"],
});
