// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/i18n", "@nuxt/content"],
  i18n: {
    baseUrl: "https://davidsandoz.ch",
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-CH",
        file: "en-CH.json",
      },
      {
        name: "Français",
        code: "fr",
        iso: "fr-CH",
        file: "fr-CH.json",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
    },
    strategy: "prefix_and_default",
    lazy: true,
    langDir: "locales",
    vueI18n: {
      legacy: false,
      locale: "en",
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
});
