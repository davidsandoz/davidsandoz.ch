<template>
  <h2>{{ t("title") }}</h2>
  <DsFigure
    slug="liipconf_codeinthedark"
    :altText="t('figure.altText')"
    :caption="t('figure.caption')"
    photographer="Josef Kruckenberg"
  />
  <ContentRenderer v-if="data" :value="data" tag="section" />
  <DsLinkIconList :linkIcons="linkIcons" />
</template>

<script lang="ts" setup>
import type { LinkIcon } from "~/components/ds-link-icon.vue";

defineI18nRoute({
  paths: {
    en: "/technology",
    fr: "/technologie",
  },
});

const { t, locale } = useI18n({ useScope: "local" });

const { data } = useAsyncData(`technology-${locale.value}`, () =>
  queryCollection("content").path(`/${locale.value}/technology`).first(),
);

const linkIcons = ref<LinkIcon[]>([
  {
    targetName: "GitHub",
    targetType: "platform",
    slug: "github",
    href: "https://github.com/DavidSandoz",
    hasColourSchemeAltIcon: true,
  },
  {
    targetName: "GitLab",
    targetType: "platform",
    slug: "gitlab",
    href: "https://gitlab.com/sandoz",
  },
  {
    targetName: "EPFL",
    targetType: "website",
    slug: "epfl",
    href: "https://epfl.ch",
  },
  {
    targetName: "Liip",
    targetType: "website",
    slug: "liip",
    href: "https://liip.ch",
    hasColourSchemeAltIcon: true,
  },
  {
    targetName: "Nothing",
    targetType: "website",
    slug: "nothing",
    href: "https://nothing.ch",
  },
  {
    targetName: "Peerdom",
    targetType: "website",
    slug: "peerdom",
    href: "https://peerdom.ch",
  },
]);
</script>

<i18n lang="json">
{
  "en": {
    "title": "Technology",
    "figure": {
      "altText": "David typing on his laptop in a dark environment and with a Liip neon sign in the background.",
      "caption": "Taking part to the Code in the Dark contest during the LiipConf 2026."
    }
  },
  "fr": {
    "title": "Technologie",
    "figure": {
      "altText": "David tapant sur son ordinateur portable dans un environnement sombre et avec une enseigne néon Liip en arrière-plan.",
      "caption": "En train de participer au concours Code in the Dark durant la LiipConf 2026."
    }
  }
}
</i18n>
