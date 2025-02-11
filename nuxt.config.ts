// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-02-11",
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
    vueI18n: "./i18n.config.ts",
  },
  content: {
    renderer: {
      anchorLinks: false,
    },
  },
});
