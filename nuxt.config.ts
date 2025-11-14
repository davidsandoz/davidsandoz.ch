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
        language: "en-CH",
        file: "en-CH.json",
      },
      {
        name: "Français",
        code: "fr",
        language: "fr-CH",
        file: "fr-CH.json",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
    },
    strategy: "prefix_and_default",
  },
  content: {
    renderer: {
      anchorLinks: false,
    },
  },
});
