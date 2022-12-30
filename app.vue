<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();
const { t } = useI18n();

useHead({
  titleTemplate: (input) => {
    return input ? `${input} – David Sandoz` : "David Sandoz";
  },
  link: [
    {
      href: "https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,700;1,300&display=swap",
      rel: "stylesheet",
    },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
    { rel: "manifest", href: "/favicon/manifest.json" },
    { rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: "#ff9900" },
    { rel: "shortcut icon", href: "/favicon/favicon.ico" },
  ],
  meta: [
    { name: "keywords", content: t("head.keywords") },
    { name: "description", content: t("head.description") },
    { property: "og:title", content: route.meta.title ? `David Sandoz – ${route.meta.title}` : "David Sandoz" },
    { property: "og:description", content: t("head.description") },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://davidsandoz.ch" },
    { property: "og:image", content: "/favicon/open-graph-icon.png" },
    { property: "og:site_name", content: "David Sandoz" },
    // Pinterest verification
    { name: "p:domain_verify", content: "799fc2ad5a88bff8c7cb898ffbc5d06f" },
  ],
});
</script>
